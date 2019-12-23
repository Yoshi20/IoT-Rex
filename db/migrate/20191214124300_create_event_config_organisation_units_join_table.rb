class CreateEventConfigOrganisationUnitsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :event_configurations, :organisation_units, table_name: :event_config_organisation_units do |t|
      t.index :event_configuration_id
      t.index :organisation_unit_id
    end
  end
end
