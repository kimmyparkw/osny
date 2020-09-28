class OrdersController < ApplicationController
  before_action :require_login
  before_action :set_order, only: [:show, :addProduct, :destroy]

  # GET /orders
  def index
    @orders = Order.where(user_id: params[:user_id])

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  
  def create
    @order = Order.create(user_id: params[:user_id])

    if @order
      render json: @order
    else
      render error: { error: 'Could not create order' }, status: 400
    end
  end
   
  def addProduct
    product = Product.find(params[:product_id])

    order_items = OrderProduct.create(order_id: order.id, product_id: params[:product_id], product_price: product.price_in_cents)
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

end

