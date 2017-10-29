class User < ApplicationRecord
  has_secure_token :access_token
  has_many :user_ducks
  has_many :ducks, through: :user_ducks
  validates :tel, presence: true
  validates :password, presence: true
  #有効なemailか？
  @valid_email = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :mail, presence: true, uniqueness: {message: 'このメールアドレスはすでに登録されています'}, format: { with: @valid_email, message: '不正なメールアドレスです' }

end
