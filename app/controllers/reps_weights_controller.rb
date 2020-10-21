class RepsWeightsController < ApplicationController

  def create
    @reps_weight = RepsWeight.new(reps_weight_params)
    if @reps_weight.save
      render json: @reps_weight
    else
      render json: @reps_weight.errors.full_messages, status: 422
    end
  end

  def index
    # @reps_weight = RepsWeight.all
    @reps_weights = RepsWeight.where("lift_id = ?", params[:lift_id])
    render json: @reps_weights
  end

  def show
    @reps_weight = RepsWeight.find(params[:id])
    render json: @reps_weight
  end

  def destroy
  end

  def update
    
  end


  private

  def reps_weight_params
    params.require(:reps_weights).permit(:reps, :weight, :lift_id)
  end
end
