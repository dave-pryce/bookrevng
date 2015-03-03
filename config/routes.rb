Bookrevng::Application.routes.draw do
  resources :reviews

 root to: 'reviews#index'


end
