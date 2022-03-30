Rails.application.routes.draw do
  devise_for :users
  root "top#index"

  resources :list, only: %i(new create edit update destroy) do
    resources :card, except: %i(index)
    member do 
      patch 'order_update'
    end
  end

  #patch "list/:id", to: "list#order_update" , as: :list_order
  resources :user, only: %i(edit update)
end
