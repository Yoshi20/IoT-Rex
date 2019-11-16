class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :data
      t.bigint :live_time

      t.timestamps
    end

    add_column :events, :device_id, :bigint
    add_foreign_key :events, :devices
    add_column :events, :event_template_id, :bigint
    add_foreign_key :events, :event_templates
  end
end
