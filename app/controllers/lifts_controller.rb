class LiftsController < ApplicationController


  def index
    # @lifts = Lift.all
    # @lifts = Lift.where("workout_id = ?", params[:workout_id])
    # render json: @lifts

    if params[:workout_id] == "all_lifts"
      @lifts = Lift.where("user_id = ?", params[:user_id])
      render json: @lifts
    else
      @lifts = Lift.where("workout_id = ?", params[:workout_id])
      render json: @lifts
    end
  end

  def show
    @lift = Lift.find(params[:id])
    render json: @lift
  end

  def create
    @lift = Lift.create!(lift_params)
    if @lift.save
      render json: @lift
    else
      render json: @lift.errors.full_messages
    end
  end

  def destroy
  end

  def update
  end

  private

  def lift_params
    params.require(:lift).permit(:workout_id, :weight, :reps, :exercise_section, :name, :user_id)
  end
end
