class Api::V1::EventTemplatesController < ApplicationController
  before_action :set_event_template, only: [:show, :edit, :update, :destroy]

  # GET /event_templates
  # GET /event_templates.json
  def index
    @event_templates = EventTemplate.all
    render json: @event_templates.to_json
  end

  # GET /event_templates/1
  # GET /event_templates/1.json
  def show
    render json: @event_template.to_json
  end

  # GET /event_templates/new
  def new
    @event_template = EventTemplate.new
  end

  # GET /event_templates/1/edit
  def edit
  end

  # POST /event_templatess
  # POST /event_templatess.json
  def create
    @event_templates = EventTemplate.new(event_templates_params)
    if @event_templates.save
      render json: @event_templates.to_json, status: :created
    else
      render json: @event_templates.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_templatess/1
  # PATCH/PUT /event_templatess/1.json
  def update
    if @event_templates.update(event_templates_params)
      render json: @event_templates.to_json, status: :ok
    else
      render json: @event_templates.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_templatess/1
  # DELETE /event_templatess/1.json
  def destroy
    @event_templates.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_template
      @event_template = EventTemplate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_template_params
      params.require(:event_template).permit(:name, :position, :static_data, :delay, :interval, :number_of_times, :event_template_list_id)
    end
end
