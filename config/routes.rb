Rails.application.routes.draw do

  # resources :users, param: :email
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'

  # resources :lifts do
  #   resources :reps_weights, only: [:index, :create]
  # end

  # resources :workouts do
  #   resources :lifts, only: [:index, :create] do
  #     resources :reps_weights, only: [:index, :create]
  #   end
  # end

  # resources :body_parts do
  #   resources :workouts, only: [:index, :create] do
  #     resources :lifts, only: [:index, :create] do
  #       resources :reps_weights, only: [:index, :create]
  #     end
  #   end
  # end

  resources :users do
      resources :body_parts, only: [:index, :create] do
        resources :workouts, only: [:index, :create] do
          resources :lifts, only: [:index, :create] do
            resources :reps_weights, only: [:index, :create]
          end
        end
      end
  end

  resources :lifts, except: [:index, :create]

  resources :reps_weights, except: [:index, :create]

  # resources :sets, except: [:index, :create]
  # resources :lifts



end
