class AddUserGroupIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :user_group_id, :bigint
    add_foreign_key :users, :user_groups
  end
end
