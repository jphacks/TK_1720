class AddStatusToAlerts < ActiveRecord::Migration[5.1]
  def change
    add_column :alerts, :status, :integer
  end
end
