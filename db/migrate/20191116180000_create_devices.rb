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
      t.integer :battery

      t.timestamps
    end

    add_column :devices, :event_template_list_id, :bigint
    add_foreign_key :devices, :event_template_lists
    add_column :devices, :organisation_id, :bigint
    add_foreign_key :devices, :organisations
  end
end
