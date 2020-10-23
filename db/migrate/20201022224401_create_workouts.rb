class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :workouts, :user_id
  end
end
