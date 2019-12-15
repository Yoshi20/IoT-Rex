class CreateOrganisationUnits < ActiveRecord::Migration[5.2]
  def change
    create_table :organisation_units do |t|
      t.string :name, null: false
      t.boolean :administration

      t.timestamps
    end

    add_column :organisation_units, :organisation_id, :bigint
    add_foreign_key :organisation_units, :organisations
  end
end
