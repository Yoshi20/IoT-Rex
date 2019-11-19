class ApplicationController < ActionController::API
  before_action :authenticate_user!, except: [:frontend_index_html]
  before_action :configure_permitted_parameters, if: :devise_controller?

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end

  def frontend_index_html
    render file: 'public/index.html'
  end

  protected

  def configure_permitted_parameters
    #new
    added_attrs = [:email, :password, :password_confirmation,
      :remember_me, :organisation_unit_id, :role_id]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

end
