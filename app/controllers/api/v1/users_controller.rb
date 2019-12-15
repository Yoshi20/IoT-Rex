class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    if current_user.super_admin?
      if params[:organisation_id].present?
        @users = Organisation.find(params[:organisation_id]).users.order(:id)
      else
        @users = User.all.order(:id)
      end
      render json: @users.to_json
    else
      head :no_content
    end
    # case current_user.role.name
    # when "Viewer", "User"
    #   head :no_content
    #   return
    # when "Manager"
    #   @users = current_user.ou.us
    # when "Admin"
    #   @users = current_user.o.us
    # when "SuperAdmin"
    #   @users = User.all
    # else
    #   raise "User with email = \"#{current_user.email}\" has an invalid role!"
    # end
    # render json: @users.includes(:role).includes(:organisation_unit).as_json(
    #   only: [:id, :name, :email],
    #   include: {
    #     organisation_unit: { only: [:id, :name] },
    #     role: { only: [:id, :name, :rights] }
    #   }
    # )
  end

  # GET /users/1
  # GET /users/1.json
  def show
    case current_user.role.name
    when "Viewer", "User"
      if @user != current_user
        head :forbidden
        return
      end
    when "Manager"
      if !current_user.ou.us.include?(@user)
        head :forbidden
        return
      end
    when "Admin"
      if !current_user.o.us.include?(@user)
        head :forbidden
        return
      end
    when "SuperAdmin"
    else
      raise "User with email = \"#{current_user.email}\" has an invalid role!"
    end
    render json: @user.as_json(
      only: [:id, :name, :email],
      include: {
        role: { only: [:id, :name, :rights] }
      }
    )
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    if !current_user.manager?
      head :forbidden
    elsif current_user.role.rights <= Role.find(user_params[:role_id]).rights
      head :forbidden
    else
      @user = User.new(user_params)
      pw = SecureRandom.urlsafe_base64(6)
      @user.password = pw
      @user.password_confirmation = pw
      if @user.save
        UserMailer.with(user: @user, pw: pw).welcome_email.deliver_later
        render json: @user.to_json, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if current_user.role.rights < @user.role.rights
      head :forbidden
    else
      if @user.update(user_params)
        render json: @user.to_json, status: :ok
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    if current_user.role.rights < @user.role.rights
      head :forbidden
    else
      @user.destroy
      head :no_content
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :organisation_unit_id, :role_id)
    end
end
