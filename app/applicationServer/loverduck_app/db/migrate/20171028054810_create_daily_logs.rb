class CreateDailyLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_logs do |t|
      t.datetime :start_at
      t.datetime :end_at
      t.integer :duck_id

      t.timestamps
    end
  end
end
