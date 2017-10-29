class ChangeDatatypeOfStatusToReactionLogs < ActiveRecord::Migration[5.1]
  def change
    change_column :reaction_logs, :status, :integer
  end
end
