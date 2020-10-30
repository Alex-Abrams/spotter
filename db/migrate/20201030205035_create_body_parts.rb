class CreateBodyParts < ActiveRecord::Migration[5.2]
  def change
    create_table :body_parts do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :body_parts, :user_id
  end
end
