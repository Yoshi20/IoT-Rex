class SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: resource.as_json(
      only: [:id, :name, :email],
      include: {
        organisation: { only: [:id, :name] },
        role: { only: [:id, :name, :rights] }
      }
    )
  end

  def respond_to_on_destroy
    head :no_content
  end
end
