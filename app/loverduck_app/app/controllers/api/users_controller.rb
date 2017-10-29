module Api

  class UsersController < ApiController
    before_action :authenticate

    def profile
      render json: {
          mail: current_user.mail,
          name: current_user.name,
          tel: current_user.tel
      }, status: 200
    end

  end
end
