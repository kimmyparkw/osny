class Api::V1::UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :destroy]

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user
    end

    def create
        @user = User.create(user_params)
        if @user
            render json: @user
        else
            render error: { error: 'Unable to create user' }, status: 400
        end
    end

    def update
        if @user
            @user.update(:username)
            render json: { message: 'User updated successfully' }, status: 200
        else
            render error: { error: 'Unable to update user' }, status: 400
        end
    end

    def destroy
        if @user
            @user.destroy
        else
            render error: { error: 'Unable to delete user' }, status: 400
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :username, :password_digest)
    end
    
    def find_user
        @user = User.find(params[:id])
    end
    
end
