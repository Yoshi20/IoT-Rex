class Api::V1::OrganisationUnitsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_organisation_unit, only: [:show, :edit, :update, :destroy]

  # GET /organisation_units
  # GET /organisation_units.json
  def index
    @organisation_units = current_user.o.ous
    render json: @organisation_units.to_json
  end

  # GET /organisation_units/1
  # GET /organisation_units/1.json
  def show
    render json: @organisation_unit.to_json
  end

  # GET /organisation_units/new
  def new
    @organisation_unit = OrganisationUnit.new
  end

  # GET /organisation_units/1/edit
  def edit
  end

  # POST /organisation_units
  # POST /organisation_units.json
  def create
    @organisation_unit = OrganisationUnit.new(organisation_unit_params)
    if @organisation_unit.save
      render json: @organisation_unit.to_json, status: :created
    else
      render json: @organisation_unit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /organisation_units/1
  # PATCH/PUT /organisation_units/1.json
  def update
    if @organisation_unit.update(organisation_unit_params)
      render json: @organisation_unit.to_json, status: :ok
    else
      render json: @organisation_unit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /organisation_units/1
  # DELETE /organisation_units/1.json
  def destroy
    @organisation_unit.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_organisation_unit
      @organisation_unit = OrganisationUnit.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def organisation_unit_params
      params.require(:organisation_unit).permit(:name, :organisation_id)
    end
end
