class CreateDeviceTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :device_types do |t|
      t.string :name
      t.integer :number_of_buttons
    end

    remove_column :event_template_lists, :device_type
    remove_column :devices, :device_type
    add_column :devices, :device_type_id, :bigint
    add_foreign_key :devices, :device_types
  end
end
