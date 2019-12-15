class Api::V1::DeviceConfigurationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_device_configuration, only: [:show, :edit, :update, :destroy]

  # GET /device_configurations
  # GET /device_configurations.json
  def index
    @device_configurations = DeviceConfiguration.all.order(:id)
    render json: @device_configurations.to_json
  end

  # GET /device_configurations/1
  # GET /device_configurations/1.json
  def show
    render json: @device_configuration.to_json
  end

  # GET /device_configurations/new
  def new
    @device_configuration = DeviceConfiguration.new
  end

  # GET /device_configurations/1/edit
  def edit
  end

  # POST /device_configurations
  # POST /device_configurations.json
  def create
    if !current_user.manager?
      head :forbidden
    else
      @device_configuration = DeviceConfiguration.new(device_configuration_params)
      device = Device.find(params[:device_id])
      @device_configuration.device_type = device.device_type
      if @device_configuration.save
        device.update(device_configuration_id: @device_configuration.id)
        render json: @device_configuration.to_json, status: :created
      else
        render json: @device_configuration.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /device_configurations/1
  # PATCH/PUT /device_configurations/1.json
  def update
    if !current_user.manager?
      head :forbidden
    else
      if @device_configuration.update(device_configuration_params)
        render json: @device_configuration.to_json, status: :ok
      else
        render json: @device_configuration.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /device_configurations/1
  # DELETE /device_configurations/1.json
  def destroy
    if !current_user.manager?
      head :forbidden
    else
      Device.where(device_configuration_id: @device_configuration.id).each do |d|
        d.update(device_configuration_id: nil)
      end
      @device_configuration.destroy
      head :no_content
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_device_configuration
      @device_configuration = DeviceConfiguration.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def device_configuration_params
      params.require(:device_configuration).permit(:name, :device_type_id, :organisation_unit_id)
    end
end
