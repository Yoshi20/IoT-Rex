class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :company,          null: false
      t.string :website
      t.string :form_of_address
      t.string :first_name,       null: false
      t.string :last_name,        null: false
      t.string :email,            null: false
      t.string :phone_number
      t.string :delivery_address, null: false
      t.string :billing_address

      t.timestamps
    end
  end
end
