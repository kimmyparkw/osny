class ProductsController < ApplicationController
    before_action :find_product, only: [:show, :update, :destroy]

    def allProducts
        @products = Product.all
        render json: @products
    end

    def index
        @products = Product.where(collection_id: params[:collection_id])
        render json: @products
    end

    def show
        render json: @product
    end

    def create
        @product = Product.create(product_params)
        if @product
            render json: @product
        else
            render error: { error: 'Could not create product' }, status: 400
        end
    end

    def update
        if @product
            @product.update(product_params)
            render json: { message: 'Successfully updated product' }, status: 200
        else
            render error: { error: 'Could not update product' }, status: 400
        end
    end

    def destroy
        if @product
            @product.destroy
            render json: { message: 'Successfully deleted product' }, status: 200
        else
            render error: { error: 'Could not delete product' }, status: 400
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :description, :price)
    end

    def find_product
        @product = Product.find(params[:id])
    end
end
