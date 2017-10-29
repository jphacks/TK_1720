class CreateReactionLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :reaction_logs do |t|
      t.integer :user_id
      t.integer :alert_id
      t.boolean :status

      t.timestamps
    end
  end
end
