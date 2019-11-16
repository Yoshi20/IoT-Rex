class AddOrganisationUnitIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :organisation_unit_id, :bigint
    add_foreign_key :users, :organisation_units
  end
end
