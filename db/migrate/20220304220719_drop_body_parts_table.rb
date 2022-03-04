class DropBodyPartsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :body_parts
  end
end
