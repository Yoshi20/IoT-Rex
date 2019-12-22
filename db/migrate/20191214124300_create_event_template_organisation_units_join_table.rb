class CreateEventConfigurationOrganisationUnitsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :event_configuration, :organisation_units do |t|
      t.index :event_configuration_id
      t.index :organisation_unit_id
    end
  end
end
