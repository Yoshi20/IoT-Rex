class AddEventTemplateListIdToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :event_template_list_id, :bigint
    add_foreign_key :devices, :event_template_lists
  end
end
