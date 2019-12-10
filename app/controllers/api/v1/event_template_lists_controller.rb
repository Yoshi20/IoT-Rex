class Api::V1::EventTemplateListsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event_template_list, only: [:show, :edit, :update, :destroy]

  # GET /event_template_lists
  # GET /event_template_lists.json
  def index
    @event_template_lists = EventTemplateList.all.order(:id)
    render json: @event_template_lists.to_json
  end

  # GET /event_template_lists/1
  # GET /event_template_lists/1.json
  def show
    render json: @event_template_list.to_json
  end

  # GET /event_template_lists/new
  def new
    @event_template_list = EventTemplateList.new
  end

  # GET /event_template_lists/1/edit
  def edit
  end

  # POST /event_template_lists
  # POST /event_template_lists.json
  def create
    if !current_user.manager?
      head :forbidden
    else
      @event_template_list = EventTemplateList.new(event_template_list_params)
      if @event_template_list.save
        render json: @event_template_list.to_json, status: :created
      else
        render json: @event_template_list.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /event_template_lists/1
  # PATCH/PUT /event_template_lists/1.json
  def update
    if @event_template_list.update(event_template_list_params)
      render json: @event_template_list.to_json, status: :ok
    else
      render json: @event_template_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_template_lists/1
  # DELETE /event_template_lists/1.json
  def destroy
    @event_template_list.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_template_list
      @event_template_list = EventTemplateList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_template_list_params
      params.require(:event_template_list).permit(:name, :channel, :organisation_unit_id, :device_type_id)
    end
end
