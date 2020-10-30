class AddFixedBodyPartIdToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :body_part_id, :integer, null: false
    add_index :workouts, :body_part_id
  end
end
