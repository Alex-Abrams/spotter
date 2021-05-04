class RedoColumnsForLifts < ActiveRecord::Migration[5.2]
  def change
    remove_column :lifts, :type, :string
    remove_column :lifts, :name, :string
    remove_column :lifts, :weight, :integer
    remove_column :lifts, :reps, :integer
  end
end
