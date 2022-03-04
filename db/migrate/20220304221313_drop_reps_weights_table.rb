class DropRepsWeightsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :reps_weights
  end
end
