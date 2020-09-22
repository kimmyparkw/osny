Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :collections do
        resources :products
      end
    end
  end

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
