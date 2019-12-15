class Api::V1::OrganisationUnitsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_organisation_unit, only: [:show, :edit, :update, :destroy]

  # GET /organisation_units
  # GET /organisation_units.json
  def index
    if current_user.super_admin?
      @organisation_units = OrganisationUnit.all.order(:id)
    else
      @organisation_units = current_user.o.ous
    end
    render json: @organisation_units.to_json
  end

  # GET /organisation_units/1
  # GET /organisation_units/1.json
  def show
    if current_user.super_admin?
      organisation_units = OrganisationUnit.all
    else
      organisation_units = current_user.o.ous
    end
    if !organisation_units.include?(@organisation_unit)
      head :no_content
      return
    end
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
    if !current_user.admin?
      head :forbidden
    else
      @organisation_unit = OrganisationUnit.new(organisation_unit_params)
      @organisation_unit.organisation = current_user.o unless organisation_unit_params[:organisation_id].present? && current_user.super_admin?
      if @organisation_unit.save
        render json: @organisation_unit.to_json, status: :created
      else
        render json: @organisation_unit.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /organisation_units/1
  # PATCH/PUT /organisation_units/1.json
  def update
    if !current_user.admin?
      head :forbidden
    else
      if @organisation_unit.administration
        @organisation_unit.errors.add(:name, "You can not update the Administration organisation unit")
        render json: @organisation_unit.errors, status: :unprocessable_entity
      else
        if @organisation_unit.update(organisation_unit_params)
          render json: @organisation_unit.to_json, status: :ok
        else
          render json: @organisation_unit.errors, status: :unprocessable_entity
        end
      end
    end
  end

  # DELETE /organisation_units/1
  # DELETE /organisation_units/1.json
  def destroy
    if !current_user.admin?
      head :forbidden
    else
      if @organisation_unit.administration
        @organisation_unit.errors.add(:name, "You can not delete the Administration organisation unit")
        render json: @organisation_unit.errors, status: :unprocessable_entity
      else
        Device.where(organisation_unit_id: @organisation_unit.id).each do |d|
          d.update(organisation_unit_id: nil)
        end
        @organisation_unit.destroy
        head :no_content
      end
    end
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
