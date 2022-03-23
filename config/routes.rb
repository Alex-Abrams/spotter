Rails.application.routes.draw do


  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'

  # Newest one, only for creating and indexing to display
  resources :users do
    resources :workouts, only: [:index, :create] do
      resources :lifts, only: [:index, :create]
    end
  end

  resources :lifts, except: [:index, :create]

  resources :workouts, except: [:index, :create]

  # resources :reps_weights, except: [:index, :create]


  # resources :sets, except: [:index, :create]
  # resources :lifts


end
