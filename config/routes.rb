Rails.application.routes.draw do
      resources :collections do
        resources :products
      end

  get "/products" => "products#allProducts"
  get "/products/:id" => "products#show"

  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "users#profile"
  resources :users

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
