class AddOrganisationUnitIdToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :organisation_unit_id, :bigint
  end
end
