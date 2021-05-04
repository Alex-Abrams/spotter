class RemoveTypeAndStringFromExercises < ActiveRecord::Migration[5.2]
  def change
    remove_column :exercises, :type, :string
    remove_column :exercises, :string, :string
    add_column :exercises, :exercise_type, :string
  end
end
