class CreateDucks < ActiveRecord::Migration[5.1]
  def change
    create_table :ducks do |t|
      t.string :unique_id
      t.string :password

      t.timestamps
    end
  end
end
