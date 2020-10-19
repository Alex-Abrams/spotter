class CreateLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :lifts do |t|
      t.integer :body_part_id, null: false
      t.string :exercise, null: false
      t.integer :workout_id, null: false

      t.timestamps
    end

    add_index :lifts, :body_part_id
    add_index :lifts, :workout_id
  end
end
