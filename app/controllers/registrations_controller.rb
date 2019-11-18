class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)
    if Role.find(sign_up_params['role_id']).rights >= Role.find_by(name: 'Admin').rights
      resource.errors.add(:role, "you're not allowed to create an administrator")
    else
      resource.save
    end
    render_resource(resource)
  end
end
