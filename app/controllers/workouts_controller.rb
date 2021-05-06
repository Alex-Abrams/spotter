class WorkoutsController < ApplicationController
  def index
    #going to be shown based on user id
    # @workouts = Workout.all
    @workouts = Workout.where("user_id = ?", params[:user_id])
    render json: @workouts
  end

  def create
    @workout = Workout.create(workout_params)
    if @workout.save
      render json: @workout
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def destroy
  end

  def update
  end

  private

  def workout_params
    params.require(:workout).permit(:user_id, :type)
  end
end
