class CreateRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.string :name
      t.integer :rights
    end

    remove_column :users, :role
    add_column :users, :role_id, :bigint
    add_foreign_key :users, :roles
  end
end
