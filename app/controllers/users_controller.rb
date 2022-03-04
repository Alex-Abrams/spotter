class UsersController < ApplicationController
  wrap_parameters :user, include: [:email, :password, :username, :password_confirmation]

  def show
     @user = User.friendly.find(params[:id])
     render json: @user
  end

  def create
    @user = User.create!(user_params)


    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit( :email, :username, :password, :password_confirmation )
  end
end
