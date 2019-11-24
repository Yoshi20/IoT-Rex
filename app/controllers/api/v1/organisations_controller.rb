class Api::V1::OrganisationsController < ApplicationController
  before_action :set_organisation, only: [:show, :edit, :update, :destroy]

  # GET /organisations
  # GET /organisations.json
  def index
    if current_user.super_admin?
      @organisations = Organisation.all
      render json: @organisations.to_json
    else
      head :no_content
    end
  end

  # GET /organisations/1
  # GET /organisations/1.json
  def show
    case current_user.role.name
    when "Viewer", "User"
      head :no_content
      return
    when "Manager", "Admin", "Super-Admin"
    else
      raise "User with email = \"#{current_user.email}\" has an invalid role!"
    end
    render json: @organisation.as_json(
      only: [:id, :name],
      include: {
        organisation_units: {
          only: [:id, :name],
          include: {
            users: {
              only: [:id, :name],
              include: {
                role: { only: [:name] }
              }
            }
          }
        },
      }
    )
  end

  # GET /organisations/new
  def new
    @organisation = Organisation.new
  end

  # GET /organisations/1/edit
  def edit
  end

  # POST /organisations
  # POST /organisations.json
  def create
    @organisation = Organisation.new(organisation_params)
    if @organisation.save
      render json: @organisation.to_json, status: :created
    else
      render json: @organisation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /organisations/1
  # PATCH/PUT /organisations/1.json
  def update
    if @organisation.update(organisation_params)
      render json: @organisation.to_json, status: :ok
    else
      render json: @organisation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /organisations/1
  # DELETE /organisations/1.json
  def destroy
    @organisation.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_organisation
      @organisation = Organisation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def organisation_params
      params.require(:organisation).permit(:name, :phone_number, :address)
    end
end
