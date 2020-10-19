class CreateSets < ActiveRecord::Migration[5.2]
  def change
    create_table :sets do |t|
      t.integer :reps, null: false
      t.integer :weight, null: false
      t.integer :lift_id, null: false

      t.timestamps
    end
    add_index :sets, :lift_id
  end
end
