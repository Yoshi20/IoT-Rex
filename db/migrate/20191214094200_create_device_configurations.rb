class CreateDeviceConfigurations < ActiveRecord::Migration[5.2]
  def change
    create_table :device_configurations do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_column :device_configurations, :device_type_id, :bigint
    add_foreign_key :device_configurations, :device_types
    add_column :device_configurations, :organisation_unit_id, :bigint
    add_foreign_key :device_configurations, :organisation_units
  end
end
