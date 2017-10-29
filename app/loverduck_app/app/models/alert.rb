class Alert < ApplicationRecord
  belongs_to :duck
  has_many :reaction_logs
  enum status: { calling: 0, completed: 1, not_completed: 2}
end
