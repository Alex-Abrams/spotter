class RemoveBodyPartIdFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :body_part_id, :integer
  end
end
