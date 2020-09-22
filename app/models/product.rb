class Product < ApplicationRecord
    belongs_to :collection
    has_many :users through :orders
end
