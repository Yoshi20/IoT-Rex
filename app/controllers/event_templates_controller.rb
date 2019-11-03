class EventTemplatesController < ApplicationController
  before_action :set_event_template, only: [:show, :edit, :update, :destroy]

  # GET /event_templates
  # GET /event_templates.json
  def index
    @event_templates = EventTemplate.all
  end

  # GET /event_templates/1
  # GET /event_templates/1.json
  def show
  end

  # GET /event_templates/new
  def new
    @event_template = EventTemplate.new
  end

  # GET /event_templates/1/edit
  def edit
  end

  # POST /event_templates
  # POST /event_templates.json
  def create
    @event_template = EventTemplate.new(event_template_params)
    @event_template.user_group = UserGroup.find_by(name: params[:user_group])
    respond_to do |format|
      if @event_template.save
        format.html { redirect_to @event_template, notice: 'Event template was successfully created.' }
        format.json { render :show, status: :created, location: @event_template }
      else
        format.html { render :new }
        format.json { render json: @event_template.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_templates/1
  # PATCH/PUT /event_templates/1.json
  def update
    respond_to do |format|
      if @event_template.update(event_template_params)
        format.html { redirect_to @event_template, notice: 'Event template was successfully updated.' }
        format.json { render :show, status: :ok, location: @event_template }
      else
        format.html { render :edit }
        format.json { render json: @event_template.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_templates/1
  # DELETE /event_templates/1.json
  def destroy
    @event_template.destroy
    respond_to do |format|
      format.html { redirect_to event_templates_url, notice: 'Event template was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_template
      @event_template = EventTemplate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_template_params
      params.require(:event_template).permit(:name, :static_data)
    end
end
