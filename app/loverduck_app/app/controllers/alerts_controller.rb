class AlertsController < ApplicationController
  before_action :authenticate, only: [:update_alertlog]

  def update_alertlog
    if current_user.present?
      render_unauthorized
    end
    reaction_log = ReactionLog.where(user_id: current_user.id, alert_id: params[:alert_id]).last
    if reaction_log.present?
        Alert.find_by(id: params[:alert_id].to_i).completed!
        reaction_log.update!(status: params[:status].to_i)
      render json: { alert_id: params[:alert_id], status: params[:status] }, status: 200
    else
      render json: { message: 'invalid alert id' }, status: 500
    end
  end

  def start_bath
    duck = Duck.find_by(unique_id: params[:unique_id])
    log = DailyLog.create(start_at: Time.now, duck_id: duck.id)
    render json: log
  end

  def finish_bath
    duck = Duck.find_by(unique_id: params[:unique_id])
    dailylog = DailyLog.where(duck_id: duck.id, end_at: nil).first
    dailylog.update(end_at: Time.now)
    render json: dailylog
  end

  def create_alert
    duck = Duck.find_by(unique_id: params[:unique_id])
    alert = Alert.new(duck_id: duck.id, called_at: Time.now, status: 0 )
    if alert.save
      start_call(duck)
      duck.users.each do |user|
        ReactionLog.create(user_id: user.id, alert_id: alert.id)
      end
      render json: alert
    else
      return_error
    end
  end

  def start_call(duck)
    begin
      account_id = "ACdd2768539e44741e44bb35c23cfa78d0"
      auth_token = ENV["AUTH_TOKEN"]
      client = Twilio::REST::Client.new(account_id, auth_token)
      duck.users.each do |user|
        if user.tel.present?
          phone_number = user.tel
          phone_number[0] = '' #最初の一桁削除
          client.api.account.calls.create(
            from: "+815031961573",
            to: '+81' + phone_number,
            url: "https://loverduck.herokuapp.com/calling",
            method: "GET"
          )
        end
      end
    rescue  => e
      puts e
    end
  end

   def index
    response = Twilio::TwiML::Response.new do |r|　#TwiMLを作成するためのモジュール
      r.Say "It's alert", voice: 'alice'
    end
    render :xml => response.text
  end

   def calling
     render file: 'public/calling.xml', status: 200, layout: false
   end

end
