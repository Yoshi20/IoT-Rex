class RenameFwVersioinToFwVersion < ActiveRecord::Migration[5.1]
  def change
    rename_column :devices, :fw_versioin, :fw_version
  end
end
