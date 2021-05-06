class RenameTypeFromWorkoutsLiftsTables < ActiveRecord::Migration[5.2]
  def change
    remove_column :lifts, :type, :string
    remove_column :workouts, :type, :string
    add_column :lifts, :exercise_section, :string
    add_column :workouts, :exercise_section, :string
  end
end
