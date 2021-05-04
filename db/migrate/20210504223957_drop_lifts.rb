class DropLifts < ActiveRecord::Migration[5.2]
  def change
    drop_table :lifts
  end
end
