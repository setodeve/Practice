Rails.application.routes.draw do
  devise_for :users, 
    controllers: { registrations: 'registrations' } 
  
  root 'posts#index'

  get '/users/:id', to: 'users#show', as: 'user'

  resources :posts, only: %i(index show new create destroy) do
    resources :photos, only: %i(create)
    resources :likes, only: %i(create destroy)
    resources :comments, only: %i(create destroy)
  end
end
