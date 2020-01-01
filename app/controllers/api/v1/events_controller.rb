class Api::V1::EventsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event, only: [:show, :edit, :update, :acknowledge, :destroy]

  # GET /events
  # GET /events.json
  def index
    if current_user.super_admin?
      if params[:organisation_id].present?
        device_ids = Organisation.find(params[:organisation_id]).devices.map{|d| d.id}
        @events = Event.where(acknowledged: false).where(device_id: device_ids).order(:sort_by_time)
      else
        @events = Event.where(acknowledged: false).order(:sort_by_time)
      end
    else
      @events = current_user.ou.events.where(acknowledged: false).order(:sort_by_time)
    end

    # Check if there are timeouted events and handle them
    @events.where("timeouted is false and timeouts_at < ?", Time.now).each do |e|
      te_id = e.event_configuration.timeout_event_id
      if te_id.present?
        ec = EventConfiguration.find(te_id)
        d = e.device
        event = Event.new
        event.text = d.name + " - " + ec.text
        event.data = e.data
        event.timeouts_at = Time.now + ec.timeout.seconds unless ec.timeout.nil?
        event.level = ec.level
        event.parent_event_id = e.id
        event.sort_by_time = e.sort_by_time + 1/1000.0  # add 1ms
        event.event_configuration = ec
        event.device = d
        event.save!
      end
      e.update!(timeouted: true)
    end

    render json: @events.to_json
  end

  # GET /events/1
  # GET /events/1.json
  def show
    render json: @event.to_json
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event.to_json, status: :created
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    if @event.update(event_params)
      render json: @event.to_json, status: :ok
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    head :no_content
  end

  # POST /uplink
  def uplink
    device = Device.find_by(dev_eui: params[:hardware_serial])
    if device.nil?
      puts "device is nil"
      head :not_found
      return
    end
    if device.device_configuration.nil?
      puts "device_configuration is nil"
      head :not_found
      return
    end
    if !params[:payload_raw].present?
      head :not_found
      return
    end
    event_trigger = nil
    payload = Base64.decode64(params[:payload_raw])
    lora_message_id = payload[0...2]
    case lora_message_id
    # when "00"  # heartbeat
    # when "20"  # any button clicked
    # when "21"  # any button clicked with image ID
    when "22"  # specific button clicked
      button_number = payload[2...4].to_i(16) unless payload[2...4].nil?
      event_trigger = device.device_configuration.event_triggers.find_by(button_number: button_number)
    else
      puts "lora_message_id: \"#{lora_message_id}\" is invalid"
    end
    if event_trigger.nil?
      puts "event_trigger not found"
      head :not_found
      return
    end
    ActiveRecord::Base.transaction do
      events = []
      event_trigger.event_configurations.where(level: 1).each do |ec|
        now = Time.now
        event = Event.new
        event.text = device.name + " - " + ec.text
        event.data = payload
        event.timeouts_at = now + ec.timeout.seconds unless ec.timeout.nil?
        event.level = ec.level
        event.sort_by_time = now
        event.event_configuration = ec
        event.device = device
        event.save!
        events << event
      end
      render json: events, status: :created
    rescue => errors
      render json: errors, status: :unprocessable_entity
    end
  end

  # PATCH /acknowledge/1
  def acknowledge
    if @event.update(acknowledged: true)
      ack_parent_event(@event)
      render json: @event.to_json, status: :ok
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private

    def ack_parent_event(event)
      if event.parent_event_id.present?
        parent_event = Event.find(event.parent_event_id)
        parent_event.update(acknowledged: true)
        ack_parent_event(parent_event)
      end
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:text, :data, :acknowledged,
        :acknowledged_at, :timeouts_at, :timeouted, :level, :parent_event_id,
        :sort_by_time, :event_configuration_id, :device_id)
    end
end
