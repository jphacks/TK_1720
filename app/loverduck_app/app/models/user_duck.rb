class UserDuck < ApplicationRecord
  belongs_to :user
  belongs_to :duck
end
