class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.integer :workout_id, :integer, null: false
      t.string :type, :string, null: false
      t.string :name, :string, null: false
      t.integer :weight, :integer, null: false
      t.integer :reps, :integer, null: false
      t.timestamps
    end

    add_index :exercises, :workout_id
  end
end
