class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :text
      t.string :data
      t.boolean :completed, default: false
      t.boolean :acknowledged, default: false
      t.string :acknowledged_by
      t.datetime :acknowledged_at
      t.datetime :timeouts_at
      t.boolean :timeouted, default: false
      t.integer :level
      t.bigint :parent_event_id
      t.datetime :sort_by_time

      t.timestamps
    end

    add_column :events, :event_configuration_id, :bigint
    add_foreign_key :events, :event_configurations
    add_column :events, :device_id, :bigint
    add_foreign_key :events, :devices
  end
end
