class ReactionLog < ApplicationRecord
  belongs_to :user
  belongs_to :alert
  enum status: { pending: 0, accepted: 1}
end
