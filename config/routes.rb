Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'courses#index'
  get 'about', to: 'pages#about'
  get 'courses/new', to: 'courses#new'
end
