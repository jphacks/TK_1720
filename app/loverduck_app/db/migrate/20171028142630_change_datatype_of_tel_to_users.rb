class ChangeDatatypeOfTelToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :tel, :string
  end
end
