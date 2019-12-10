class Api::V1::DevicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_device, only: [:show, :edit, :update, :destroy]

  # GET /devices
  # GET /devices.json
  def index
    case current_user.role.name
    when "Viewer", "User"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      @devices = Device.where(event_template_list_id: etl_ids.uniq)
    when "Manager"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      @devices = Device.where(event_template_list_id: etl_ids.uniq).or(Device.where(organisation: current_user.o, event_template_list_id: nil))
    when "Admin"
      @devices = current_user.o.ds
    when "Super-Admin"
      if params[:organisation_id].present?
        @devices = Device.where(organisation_id: params[:organisation_id]).order(:id)
      else
        @devices = Device.all.order(:id)
      end
    else
      raise "User with email = \"#{current_user.email}\" has an invalid role!"
    end
    render json: @devices.as_json(
      only: [:id, :name, :device_type, :battery],
      include: {
        device_type: { only: [:id, :name] },
        organisation_unit: { only: [:id, :name] },
        event_template_list: {
          only: [:id, :name, :channel],
          include: {
            organisation_unit: { only: [:id, :name] }
          }
        },
      }
    )
  end

  # GET /devices/1
  # GET /devices/1.json
  def show
    case current_user.role.name
    when "Viewer", "User"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      devices = Device.where(event_template_list_id: etl_ids.uniq)
      if !devices.include?(@device)
        head :no_content
        return
      end
    when "Manager"
      etl_ids = current_user.ou.ets.map { |et| etl.event_template_list_id }
      devices = Device.where(event_template_list_id: etl_ids.uniq).or(Device.where(organisation: current_user.o, event_template_list_id: nil))
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
        device_type: { only: [:id, :name, :number_of_buttons] },
        organisation_unit: { only: [:id, :name] },
        event_template_list: {
          only: [:id, :name, :channel],
          include: {
            organisation_unit: { only: [:id, :name] },
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
    if !current_user.super_admin?
      head :forbidden
    else
      @device = Device.new(device_params)
      if @device.save
        render json: @device.to_json, status: :created
      else
        render json: @device.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /devices/1
  # PATCH/PUT /devices/1.json
  def update
    if current_user.super_admin?
      if @device.update(device_params)
        render json: @device.to_json, status: :ok
      else
        render json: @device.errors, status: :unprocessable_entity
      end
    elsif current_user.manager?
      if @device.update(reduced_device_params)
        render json: @device.to_json, status: :ok
      else
        render json: @device.errors, status: :unprocessable_entity
      end
    else
      head :forbidden
    end
  end

  # DELETE /devices/1
  # DELETE /devices/1.json
  def destroy
    if !current_user.super_admin?
      head :forbidden
    else
      @device.destroy
      head :no_content
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_device
      @device = Device.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def device_params
      params.require(:device).permit(:name, :dev_eui, :app_eui, :app_key, :hw_version, :fw_version, :battery, :device_type_id, :event_template_list_id, :organisation_id, :organisation_unit_id)
    end

    def reduced_device_params
      params.require(:device).permit(:name, :event_template_list_id)
    end
end
