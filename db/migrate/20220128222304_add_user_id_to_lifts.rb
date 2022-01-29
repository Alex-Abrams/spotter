class AddUserIdToLifts < ActiveRecord::Migration[5.2]
  def change
    add_column :lifts, :user_id, :integer, null: false
    add_index :lifts, :user_id
  end
end
