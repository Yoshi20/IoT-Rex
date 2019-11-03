class AddEventTemplateListIdToEventTemplates < ActiveRecord::Migration[5.1]
  def change
    add_column :event_templates, :event_template_list_id, :bigint
    add_foreign_key :event_templates, :event_template_lists
  end
end
