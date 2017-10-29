class Duck < ApplicationRecord
  has_many :user_ducks
  has_many :users, through: :user_ducks
  has_many :alerts
  has_many :daily_logs
  validates :name, presence: true
  validates :unique_id, presence: true, uniqueness: {message: 'すでに登録されています'}
end
