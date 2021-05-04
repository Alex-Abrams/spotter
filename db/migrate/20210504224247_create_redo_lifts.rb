class CreateRedoLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :lifts do |t|
      t.integer :workout_id, null: false
      t.integer :weight, null: false
      t.integer :reps, null: false
      t.string :type, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :lifts, :workout_id
  end
end
