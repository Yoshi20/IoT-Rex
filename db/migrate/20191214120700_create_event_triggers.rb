class CreateEventTriggers < ActiveRecord::Migration[5.2]
  def change
    create_table :event_triggers do |t|
      t.integer :button_number
      t.integer :image_id

      t.timestamps
    end

    add_column :event_triggers, :lora_message_type_id, :bigint
    add_foreign_key :event_triggers, :lora_message_types
    add_column :event_triggers, :device_configuration_id, :bigint
    add_foreign_key :event_triggers, :device_configurations
  end
end
