class User < ApplicationRecord
  has_secure_token :access_token
  has_many :user_ducks
  has_many :ducks, through: :user_ducks
  #has_secure_tokenという記述を入れることで、Userモデルにデータが追加されたときに、自動的に
  #Userモデルが持つtokenという属性にセキュアトークンが生成され保存されます。
end
