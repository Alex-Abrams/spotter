class RemoveUsernameAgainFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username, :string
  end
end
