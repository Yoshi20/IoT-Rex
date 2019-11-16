class CreateEventTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :event_templates do |t|
      t.string :name, null: false
      t.integer :position
      t.string :static_data
      t.bigint :delay
      t.bigint :interval
      t.integer :number_of_times

      t.timestamps
    end

    add_column :event_templates, :event_template_list_id, :bigint
    add_foreign_key :event_templates, :event_template_lists
  end
end
