class AddStatusToDucks < ActiveRecord::Migration[5.1]
  def change
    add_column :ducks, :status, :boolean
  end
end
