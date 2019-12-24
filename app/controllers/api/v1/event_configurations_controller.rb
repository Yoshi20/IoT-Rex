class Api::V1::EventConfigurationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event_configuration, only: [:show, :edit, :update, :destroy]

  # GET /event_configurations
  # GET /event_configurations.json
  def index
    @event_configurations = EventConfiguration.all.order(:id)
    render json: @event_configurations.to_json
  end

  # GET /event_configurations/1
  # GET /event_configurations/1.json
  def show
    render json: @event_configuration.to_json
  end

  # GET /event_configurations/new
  def new
    @event_configuration = EventConfiguration.new
  end

  # GET /event_configurations/1/edit
  def edit
  end

  # POST /event_configurationss
  # POST /event_configurationss.json
  def create
    ActiveRecord::Base.transaction do
      @event_configuration = EventConfiguration.new(event_configuration_params)
      if @event_configuration.save
        # if params[:event_configuration][:organisation_unit_ids].present?
        #   params[:event_configuration][:organisation_unit_ids].each do |ou_id|
        #     EventConfigurationOrganisationUnit.create!(event_configuration_id: @event_configuration.id, organisation_unit_id: ou_id)
        #   end
        # end
        render json: @event_configuration.to_json, status: :created
      else
        puts '=> @event_configuration.save failed!'
        raise @event_configuration.errors
      end
    rescue => errors
      render json: errors, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /event_configurationss/1
  # PATCH/PUT /event_configurationss/1.json
  def update
    if @event_configurations.update(event_configuration_params)
      render json: @event_configurations.to_json, status: :ok
    else
      render json: @event_configurations.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_configurationss/1
  # DELETE /event_configurationss/1.json
  def destroy
    @event_configurations.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_configuration
      @event_configuration = EventConfiguration.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_configuration_params
      params.require(:event_configuration).permit(:text, :level, :acknowledged_event_id, :timeout, :timeout_event_id, :notification_channel_id, :event_trigger_id)
    end
end
