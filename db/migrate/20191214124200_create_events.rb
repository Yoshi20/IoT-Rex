class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :text
      t.string :data
      t.datetime :timeouts_at

      t.timestamps
    end

    add_column :events, :event_template_id, :bigint
    add_foreign_key :events, :event_templates
    add_column :events, :device_id, :bigint
    add_foreign_key :events, :devices
  end
end
