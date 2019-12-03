class Api::V1::ContactsController < ApplicationController
  before_action :authenticate_user!, except: [:create]
  before_action :set_contact, only: [:show, :edit, :update, :destroy]

  # GET /contacts
  # GET /contacts.json
  def index
    if current_user.super_admin?
      @contacts = Contact.all.order(:id)
      render json: @contacts.to_json
    else
      head :no_content
    end
  end

  # GET /contacts/1
  # GET /contacts/1.json
  def show
    if current_user.super_admin?
      render json: @contact.to_json
    else
      head :no_content
    end
  end

  # GET /contacts/new
  def new
    @contact = Contact.new
  end

  # GET /contacts/1/edit
  def edit
  end

  # POST /contacts
  # POST /contacts.json
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact.to_json, status: :created
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /contacts/1
  # PATCH/PUT /contacts/1.json
  def update
    if !current_user.super_admin?
      head :forbidden
    else
      if @contact.update(contact_params)
        render json: @contact.to_json, status: :ok
      else
        render json: @contact.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /contacts/1
  # DELETE /contacts/1.json
  def destroy
    if !current_user.super_admin?
      head :forbidden
    else
      @contact.destroy
      head :no_content
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(:company, :website, :form_of_address, :first_name, :last_name, :email, :phone_number, :delivery_address, :billing_address)
    end
end
