class CreateEventTemplateOrganisationUnitsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :event_template, :organisation_units do |t|
      t.index :event_template_id
      t.index :organisation_unit_id
    end
  end
end
