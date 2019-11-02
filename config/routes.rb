Rails.application.routes.draw do
  resources :devices
  resources :user_groups
  resources :users

  namespace :api do
    namespace :v1, defaults: { format: 'json'} do
      get 'things', to: 'things#index'
    end
  end
  # Forward all requests to StaticController#index
  # All requests must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?)
  # This does not include the root ("/") path
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
