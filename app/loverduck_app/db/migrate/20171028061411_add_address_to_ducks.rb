class AddAddressToDucks < ActiveRecord::Migration[5.1]
  def change
    add_column :ducks, :address, :string
    add_column :ducks, :name, :string
    add_column :ducks, :postal_code, :integer
  end
end
