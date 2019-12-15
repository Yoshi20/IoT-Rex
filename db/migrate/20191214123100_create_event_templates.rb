class CreateEventTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :event_templates do |t|
      t.string :text
      t.bigint :acknowledged_event_id
      t.bigint :timeout
      t.bigint :timeout_event_id

      t.timestamps
    end

    add_column :event_templates, :notification_channel_id, :bigint
    add_foreign_key :event_templates, :notification_channels
    add_column :event_templates, :event_trigger_id, :bigint
    add_foreign_key :event_templates, :event_triggers
  end
end
