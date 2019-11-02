class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email,              null: false
      t.string :encrypted_password, null: false
      t.integer :sign_in_count,     null: false, default: 0
      t.datetime :last_sign_in_at
      t.boolean :is_admin
      t.boolean :is_super_admin

      t.timestamps
    end
  end
end
