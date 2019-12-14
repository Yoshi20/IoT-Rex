class Api::V1::OrganisationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_organisation, only: [:show, :edit, :update, :destroy]

  # GET /organisations
  # GET /organisations.json
  def index
    if current_user.super_admin?
      @organisations = Organisation.all.order(:id)
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
    when "Manager", "Admin", "SuperAdmin"
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
    if !current_user.super_admin?
      head :forbidden
    else
      # Create an organisation, an administrator organisation_unit and an admin user
      contact = Contact.find(organisation_params[:contact_id])
      if contact.present?
        ActiveRecord::Base.transaction do
          @organisation = Organisation.new
          @organisation.name = contact.company
          @organisation.contact = contact
          if @organisation.save
            organisation_unit = OrganisationUnit.new
            organisation_unit.name = 'Administration'
            organisation_unit.organisation = @organisation
            if organisation_unit.save
              user = User.new
              user.name = "#{contact.first_name} #{contact.last_name}"
              user.email = contact.email
              pw = SecureRandom.urlsafe_base64(6)
              user.password = pw
              user.password_confirmation = pw
              user.role = Role.find_by(name: 'Admin')
              user.organisation_unit = organisation_unit
              if user.save
                UserMailer.with(user: user, pw: pw).welcome_email.deliver_later
                render json: @organisation.as_json(
                  only: [:id, :name],
                  include: {
                    organisation_units: {
                      only: [:id, :name],
                      include: {
                        users: {
                          only: [:id, :name, :email],
                          include: {
                            role: { only: [:name] }
                          }
                        }
                      }
                    },
                  }
                ), status: :created
              else
                puts '=> user.save failed!'
                raise user.errors
              end
            else
              puts '=> organisation_unit.save failed!'
              raise organisation_unit.errors
            end
          else
            puts '=> organisation.save failed!'
            raise @organisation.errors
          end
        rescue => errors
          raise json: errors, status: :unprocessable_entity
          return
        end
      end
    end
  end

  # PATCH/PUT /organisations/1
  # PATCH/PUT /organisations/1.json
  def update
    if !current_user.admin?
      head :forbidden
    else
      if @organisation.update(organisation_params)
        render json: @organisation.to_json, status: :ok
      else
        render json: @organisation.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /organisations/1
  # DELETE /organisations/1.json
  def destroy
    if !current_user.super_admin?
      head :forbidden
    else
      @organisation.destroy
      head :no_content
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_organisation
      @organisation = Organisation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def organisation_params
      params.require(:organisation).permit(:name, :contact_id)
    end
end
