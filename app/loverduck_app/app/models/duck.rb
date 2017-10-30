class Duck < ApplicationRecord
  has_many :user_ducks
  has_many :users, through: :user_ducks
  has_many :alerts
  has_many :daily_logs

end
