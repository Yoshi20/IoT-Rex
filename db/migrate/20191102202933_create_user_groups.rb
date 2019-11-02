class CreateUserGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :user_groups do |t|
      t.string :name, null: false
      t.string :phone_number
      t.string :address

      t.timestamps
    end
  end
end
