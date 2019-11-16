class CreateOrganisations < ActiveRecord::Migration[5.2]
  def change
    create_table :organisations do |t|
      t.string :name,         null: false, unique: true
      t.string :phone_number
      t.string :address

      t.timestamps
    end
  end
end
