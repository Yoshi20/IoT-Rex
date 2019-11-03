class CreateEventTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :event_templates do |t|
      t.string :name, null: false
      t.string :static_data

      t.timestamps
    end

    add_column :event_templates, :user_group_id, :bigint
    add_foreign_key :event_templates, :user_groups
  end
end
