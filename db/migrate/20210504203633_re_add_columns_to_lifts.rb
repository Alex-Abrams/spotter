class ReAddColumnsToLifts < ActiveRecord::Migration[5.2]
  def change
    add_column :lifts, :type, :string
    add_column :lifts, :name, :string
    add_column :lifts, :weight, :integer
    add_column :lifts, :reps, :integer
  end
end
