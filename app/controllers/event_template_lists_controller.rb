class EventTemplateListsController < ApplicationController
  before_action :set_event_template_list, only: [:show, :edit, :update, :destroy]

  # GET /event_template_lists
  # GET /event_template_lists.json
  def index
    @event_template_lists = EventTemplateList.all
  end

  # GET /event_template_lists/1
  # GET /event_template_lists/1.json
  def show
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
    @event_template_list = EventTemplateList.new(event_template_list_params)
    @event_template_list.user_group = UserGroup.find_by(name: params[:user_group])
    respond_to do |format|
      if @event_template_list.save
        format.html { redirect_to @event_template_list, notice: 'Event template list was successfully created.' }
        format.json { render :show, status: :created, location: @event_template_list }
      else
        format.html { render :new }
        format.json { render json: @event_template_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_template_lists/1
  # PATCH/PUT /event_template_lists/1.json
  def update
    respond_to do |format|
      if @event_template_list.update(event_template_list_params)
        format.html { redirect_to @event_template_list, notice: 'Event template list was successfully updated.' }
        format.json { render :show, status: :ok, location: @event_template_list }
      else
        format.html { render :edit }
        format.json { render json: @event_template_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_template_lists/1
  # DELETE /event_template_lists/1.json
  def destroy
    @event_template_list.destroy
    respond_to do |format|
      format.html { redirect_to event_template_lists_url, notice: 'Event template list was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_template_list
      @event_template_list = EventTemplateList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_template_list_params
      params.require(:event_template_list).permit(:name, :device_type, :channel)
    end
end
