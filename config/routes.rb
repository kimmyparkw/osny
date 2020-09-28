Rails.application.routes.draw do
  resources :collections do
    resources :products
  end

  get "/products" => "products#allProducts"
  get "/products/:id" => "products#show"

  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "users#profile"
  post "/auth/register" => "users#create"


  get "/user/:id/orders" => "orders#index"
  post "/user/:id/order" => "orders#create"
  get "/user/:id/order/:id" => "orders#show"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
      !request.xhr? && request.format.html?
    end
end
