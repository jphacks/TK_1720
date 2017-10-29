module Api
  class AuthorizationsController < ApiController
   # include ActionController::HttpAuthentication::Token::ControllerMethods
    before_action :authenticate, only: [:profile, :edit_password, :edit_profile]

    def signup
      user = User.create!(mail: params[:mail], password: params[:password], name: params[:name], tel: params[:tel])
      if user.present?
      token = { "access_token": user.access_token }
      render json: token
      else
        return_error
      end
    end

    def signin
        user = User.where(mail: params[:mail], password: params[:password]).first
        token = { "access_token": user.access_token }
        if user.present?
          render json: token
        else
          render json: { "message": 'email or password invalid' }
        end
    end

    def profile
    end

    def edit_profile
      if current_user.present?
        current_user.update(name: params[:name], tel: params[:tel])
        render_ok
      else
        render_unauthorized
      end
    end

    def edit_password
      if current_user.password == params[:old_password]
        current_user.update(password: params[:new_password])
        data = { "messages": 'ok' }
        render json: data
      else
        render_unauthorized
      end
    end

  end
end
 
