class AddImagesToCollections < ActiveRecord::Migration[6.0]
  def change
    add_column :collections, :image, :string
  end
end
