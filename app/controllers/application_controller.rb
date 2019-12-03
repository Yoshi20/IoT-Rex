class ApplicationController < ActionController::API
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
    headers["Cache-Control"] = "no-cache, no-store, must-revalidate" # HTTP 1.1.
    headers["Pragma"] = "no-cache" # HTTP 1.0.
    headers["Expires"] = "0" # Proxies.
    render html: File.read(Rails.root + 'public' + 'index.html').html_safe
  end

  protected

  def configure_permitted_parameters
    #new
    added_attrs = [:email, :password, :password_confirmation,
      :remember_me, :organisation_unit_id, :role_id, :name]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

end
