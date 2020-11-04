class BodyPartsController < ApplicationController
  def index
    @body_parts = BodyPart.all
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
