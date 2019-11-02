class CreateDevices < ActiveRecord::Migration[5.2]
  def change
    create_table :devices do |t|
      t.string :name,        null: false
      t.string :device_type, null: false
      t.string :dev_eui,     null: false
      t.string :app_eui
      t.string :app_key
      t.string :hw_version
      t.string :fw_versioin

      t.timestamps
    end

    add_column :devices, :user_group_id, :bigint
    add_foreign_key :devices, :user_groups
  end
end
