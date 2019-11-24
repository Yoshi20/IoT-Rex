class Api::V1::DevicesController < ApplicationController
  before_action :set_device, only: [:show, :edit, :update, :destroy]

  # GET /devices
  # GET /devices.json
  def index
    case current_user.role.name
    when "Viewer", "User"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      @devices = Device.where(event_template_list_id: etl_ids.unitq)
    when "Manager"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      @devices = Device.where(event_template_list_id: etl_ids.unitq).or(Device.where(organisation: current_user.o, event_template_list_id: nil))
    when "Admin"
      @devices = current_user.o.ds
    when "Super-Admin"
      @devices = Device.all
    else
      raise "User with email = \"#{current_user.email}\" has an invalid role!"
    end
    render json: @devices.as_json(
      only: [:id, :name, :device_type, :battery]
    )
  end

  # GET /devices/1
  # GET /devices/1.json
  def show
    case current_user.role.name
    when "Viewer", "User"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      devices = Device.where(event_template_list_id: etl_ids.unitq)
      if !devices.include?(@device)
        head :no_content
        return
      end
    when "Manager"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      devices = Device.where(event_template_list_id: etl_ids.unitq).or(Device.where(organisation: current_user.o, event_template_list_id: nil))
      if !devices.include?(@device)
        head :no_content
        return
      end
    when "Admin"
      devices = current_user.o.ds
      if !devices.include?(@device)
        head :no_content
        return
      end
    when "Super-Admin"
    else
      raise "User with email = \"#{current_user.email}\" has an invalid role!"
    end
    render json: @device.as_json(
      only: [:id, :name, :device_type, :dev_eui, :app_eui, :app_key, :hw_version, :fw_version, :battery],
      include: {
        event_template_list: {
          only: [:id, :name, :device_type, :channel],
          include: {
            event_templates: { only: [:id, :name, :position, :static_data, :delay, :interval, :number_of_times] }
          }
        },
      }
    )
  end

  # GET /devices/new
  def new
    @device = Device.new
  end

  # GET /devices/1/edit
  def edit
  end

  # POST /devices
  # POST /devices.json
  def create
    @device = Device.new(device_params)
    if @device.save
      render json: @device.to_json, status: :created
    else
      render json: @device.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /devices/1
  # PATCH/PUT /devices/1.json
  def update
    if @device.update(device_params)
      render json: @device.to_json, status: :ok
    else
      render json: @device.errors, status: :unprocessable_entity
    end
  end

  # DELETE /devices/1
  # DELETE /devices/1.json
  def destroy
    @device.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_device
      @device = Device.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def device_params
      params.require(:device).permit(:name, :device_type, :dev_eui, :app_eui, :app_key, :hw_version, :fw_version, :battery, :event_template_list_id, :organisation_id)
    end
end
