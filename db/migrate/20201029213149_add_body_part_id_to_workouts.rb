class AddBodyPartIdToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :body_part_id, :integer
  end
end
