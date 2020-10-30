class RemoveBodyPartIdFromLifts < ActiveRecord::Migration[5.2]
  def change
    remove_column :lifts, :body_part_id, :integer
  end
end
