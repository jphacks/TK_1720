module Api
  class DucksController < ApiController
    before_action :authenticate

    def update_profile
      duck = Duck.find_by(id: params[:duck_id])
      if duck.present?
        duck.update(name: params[:name], postal_code: params[:postal_code], address: params[:address])
        render_ok
      else
        render json: {
          message: "Duck id invalid",
        }, status: 404

      end
    end

    def edit
    end

    def create
      duck = Duck.create(unique_id: params[:unique_id], postal_code: params[:postal_code], address: params[:address], password: params[:password], name: params[:name])
      UserDuck.create(duck_id: duck.id, user_id: current_user.id)
      render_ok
    end

    def register
      UserDuck.create(user_id: current_user.id, duck_id: params[:duck_id])
    end

    def list
      puts current_user
      if current_user.present?
        @ducks = current_user.ducks
        render 'list', formats: 'json', handlers: 'jbuilder'
      else
        return_error
      end
    end

    def detail
      duck = Duck.find(params[:duck_id])
      render json: {
        name: duck.name,
        address: duck.address,
        postal_code: duck.postal_code,
        status: duck.status
      }, status: 200
    end

    def dailylog
        duck = Duck.find(params[:duck_id])
        @daily_logs = duck.daily_logs
        render 'daily_logs', formats: 'json', handlers: 'jbuilder'
    end

    
    def alertlog
      puts params[:duck_id]
      duck = Duck.find_by(id: params[:duck_id])
      if duck.present?
        @alert_logs = duck.alerts
      else
        @alert_logs = nil
      end
      render 'alertlog', formats: 'json', handlers: 'jbuilder'
    end

    def reaction_log
    end

  end
end
