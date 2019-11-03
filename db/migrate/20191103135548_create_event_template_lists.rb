class CreateEventTemplateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :event_template_lists do |t|
      t.string :name, null: false
      t.string :device_type
      t.string :channel

      t.timestamps
    end

    add_column :event_template_lists, :user_group_id, :bigint
    add_foreign_key :event_template_lists, :user_groups
  end
end
