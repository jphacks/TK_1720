class ApplicationController < ActionController::API
  def authenticate
      auth_user = User.find_by(access_token: params[:access_token])
      auth_user != nil ? true : false
      if auth_user == nil
        render_unauthorized
      end
  end

  def current_user
      auth_user = User.find_by(access_token: params[:access_token])
      return auth_user
  end

  def render_ok
    render json: {
        message: "OK",
    }, status: 200
  end

  def return_error
    render json: {
      message: "Error!",
    }, status: 500
  end

  def render_unauthorized
    # render_errors(:unauthorized, ['invalid token'])
    obj = { message: 'token invalid' }
    render json: obj, status: :unauthorized
  end

end
