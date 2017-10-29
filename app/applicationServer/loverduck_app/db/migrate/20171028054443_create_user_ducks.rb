class CreateUserDucks < ActiveRecord::Migration[5.1]
  def change
    create_table :user_ducks do |t|
      t.integer :user_id
      t.integer :duck_id

      t.timestamps
    end
  end
end
