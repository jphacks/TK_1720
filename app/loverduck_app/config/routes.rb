Rails.application.routes.draw do
  #resources :users
  #devise_for :users
  #mount_devise_token_auth_for 'User', at: 'api/auth'
  #namespace :api do
  #  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
  #      registrations: 'api/auth/registrations'
  #  }
  #end
  root to: 'home#index'
  get 'home/index'
  get 'calling' => 'alerts#calling'
  get 'start_call' => 'alerts#start_call'
  post 'api/auth/profile' => "api/users#profile"
  post 'api/auth/signup' => "api/authorizations#signup"
  post 'api/auth/signin' => "api/authorizations#signin"
  post 'api/auth/password/edit' => "api/authorizations#edit_password"
  post 'api/auth/profile/edit' => "api/authorizations#edit_profile"
  post 'api/duck/create' => "api/ducks#create"
  post 'api/duck/register' => 'api/ducks#register'
  post 'api/duck/update' => 'api/ducks#update_profile'
  post 'api/duck/list' => 'api/ducks#list'
  post 'api/duck/detail' => 'api/ducks#detail'
  post 'api/duck/dailylog' => 'api/ducks#dailylog'
  post 'api/duck/alertlog' => 'api/ducks#alertlog'
  post 'api/duck/alertlog/update' => 'alerts#update_alertlog'
  post 'api/alert/create' => 'alerts#create_alert'
  post 'api/bath/create' => 'alerts#start_bath'
  post 'api/bath/finish' => 'alerts#finish_bath'
#  post 'api/duck/reactionlog' => 'api/ducks#reaction_log'
end
