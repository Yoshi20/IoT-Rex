Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :events
      resources :event_template_lists
      resources :event_templates
      resources :devices
      resources :user_groups
      resources :users
      get 'tests', to: 'tests#index'
    end
  end

  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
      !request.xhr? && request.format.html?
    }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
