class CreateAlerts < ActiveRecord::Migration[5.1]
  def change
    create_table :alerts do |t|
      t.datetime :called_at
      t.integer :duck_id

      t.timestamps
    end
  end
end
