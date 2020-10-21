class LiftsController < ApplicationController
  def index
    @lifts = Lift.all
    render json: @lifts
  end

  def show
    @lift = Lift.find(params[:id])
    render json: @lift
  end

  def create
    @lift = Lift.new(lift_params)
    if @lift.save
      render json: @lift
    else
      render json: @lift.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def update
  end

  private

  def lift_params
    params.require(:lift).permit(:body_part_id, :excercise, :workout_id)
  end
end
