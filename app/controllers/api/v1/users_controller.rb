class Api::V1::UsersController < ApiController
    before_action :require_login, except: [:create]

    def create
        user = User.create!(user_params)
        render json: { token: user.auth_token}
    end

    def profile
        user = User.find_by!(auth_token: request.headers[:token])
        render json: { user: { name: user.name, username: user.username, email: user.email } }
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :username, :password)
    end
    
end
