class CreateOrganisations < ActiveRecord::Migration[5.2]
  def change
    create_table :organisations do |t|
      t.string :name, null: false, unique: true

      t.timestamps
    end

    add_column :organisations, :contact_id, :bigint
    add_foreign_key :organisations, :contacts
  end
end
