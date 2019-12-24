class Api::V1::EventTriggersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event_trigger, only: [:show, :edit, :update, :destroy]

  # GET /event_triggers
  # GET /event_triggers.json
  def index
    @event_triggers = EventTrigger.all.order(:id)
    render json: @event_triggers.to_json
  end

  # GET /event_triggers/1
  # GET /event_triggers/1.json
  def show
    render json: @event_trigger.to_json
  end

  # GET /event_triggers/new
  def new
    @event_trigger = EventTrigger.new
  end

  # GET /event_triggers/1/edit
  def edit
  end

  # POST /event_triggers
  # POST /event_triggers.json
  def create
    ActiveRecord::Base.transaction do
      @event_trigger = EventTrigger.new(event_trigger_params)
      if @event_trigger.save
        if params[:event_configurations].present?
          ets = []
          # determine the size of the 2d array
          number_of_rows = params[:event_configurations].length
          number_of_columns = params[:event_configurations][0].length
          # loop (bottom to top) through every possibilty and check if there's an event_configuration to create and an ack_event link to make
          (number_of_rows-1).downto(0) do |r|
            ets_row = []
            last_event_configuration_id = nil
            (number_of_columns-1).downto(0) do |c|
              et_param = params[:event_configurations][r][c]
              et = nil
              if et_param.present?
                et = EventConfiguration.new()
                et.text = et_param[:text]
                et.acknowledged_event_id = last_event_configuration_id
                et.timeout = et_param[:timeout]
                et.notification_channel_id = et_param[:notification_channel_id]
                et.event_trigger = @event_trigger
                et.save!
                if et_param[:organisation_unit_ids].present?
                  et_param[:organisation_unit_ids].each do |ou_id|
                    EventConfigurationOrganisationUnit.create!(event_configuration_id: et.id, organisation_unit_id: ou_id)
                  end
                end
                last_event_configuration_id = et.id
              end
              ets_row << et
            end
            ets << ets_row.reverse
          end
          ets.reverse!
          # loop again (left to right) through every possibilty and check if there's a timeout_event link to make
          0.upto(number_of_columns-1) do |c|
            0.upto(number_of_rows-1) do |r|
              et_param = params[:event_configurations][r][c]
              if et_param.present? && et_param[:timeout].present?
                et = ets[r][c]
                # we found an event with a timeout -> check the next column and row for its timeout_event
                (r+1).upto(number_of_rows-1) do |rr|
                  if ets[rr][c+1].present?
                    et.timeout_event_id = ets[rr][c+1].id
                    et.save!
                  end
                end
              end
            end
          end
        end
        render json: @event_trigger.to_json, status: :created
      else
        puts '=> @event_trigger.save failed!'
        raise @event_trigger.errors
      end
    rescue => errors
      render json: errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_triggers/1
  # PATCH/PUT /event_triggers/1.json
  def update
    if @event_triggers.update(event_trigger_params)
      render json: @event_triggers.to_json, status: :ok
    else
      render json: @event_triggers.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_triggers/1
  # DELETE /event_triggers/1.json
  def destroy
    @event_triggers.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_trigger
      @event_trigger = EventTrigger.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_trigger_params
      params.require(:event_trigger).permit(:button_number, :image_id, :lora_message_type_id, :device_configuration_id)
    end
end
