class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :mail
      t.string :access_token
      t.string :tel

      t.timestamps
    end
    add_index :users, :access_token, unique: true
  end
end
