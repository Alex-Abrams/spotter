class DropNewLiftsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :new_lifts
  end
end
