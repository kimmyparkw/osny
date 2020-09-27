class AddOrderIdToUsersTable < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :current_order, :integer, default: :null
  end
end
