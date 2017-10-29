class AddTelToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :tel, :integer
  end
end
