Rails.application.routes.draw do
  devise_for :users,
  path: '',
  path_names: {
    sign_in: '/api/v1/login',
    sign_out: '/api/v1/logout',
    registration: '/api/v1/signup'
  },
  controllers: {
    sessions: 'sessions',
    registrations: 'registrations'
  }

  namespace :api do
    namespace :v1 do
      resources :contacts
      resources :devices
      resources :event_template_lists
      resources :event_templates
      resources :events
      resources :organisation_units
      resources :organisations
      resources :users
    end
  end

  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
      !request.xhr? && request.format.html?
    }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
