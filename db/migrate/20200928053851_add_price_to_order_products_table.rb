class AddPriceToOrderProductsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :order_products, :product_price, :integer
  end
end
