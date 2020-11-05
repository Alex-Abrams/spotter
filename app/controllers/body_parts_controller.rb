class BodyPartsController < ApplicationController
  def index
    # @body_parts = BodyPart.all
    @body_parts = BodyPart.where("user_id = ?", params[:user_id])
    render json: @body_parts
  end

  def create
    @body_part = BodyPart.create(body_part_params)
    if @body_part.save
      render json: @body_part
    else
      render json: @body_part.errors.full_messages, status: 422
    end
  end

  def show
    @body_part = BodyPart.find(params[:id])
  end

  private

  def body_part_params
    params.require(:body_part).permit(:user_id, :name)
  end

end


# curl -H "Authorization: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MDQ2MjIyMDd9.Ck9K199une3c-6UNJID9Kc05QlriN400NhLacvsbN-o" http://localhost:3000/users/2/body_parts/2/workouts/2/lifts/2/reps_weights
