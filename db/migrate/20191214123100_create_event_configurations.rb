class CreateEventConfigurations < ActiveRecord::Migration[5.2]
  def change
    create_table :event_configurations do |t|
      t.string :text
      t.bigint :acknowledged_event_id
      t.bigint :timeout
      t.bigint :timeout_event_id

      t.timestamps
    end

    add_column :event_configurations, :notification_channel_id, :bigint
    add_foreign_key :event_configurations, :notification_channels
    add_column :event_configurations, :event_trigger_id, :bigint
    add_foreign_key :event_configurations, :event_triggers
  end
end
