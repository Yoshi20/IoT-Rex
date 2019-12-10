class AddDeviceTypeIdToEventTemplateLists < ActiveRecord::Migration[5.1]
  def change
    add_column :event_template_lists, :device_type_id, :bigint
    add_foreign_key :event_template_lists, :device_types
  end
end
