class CreateNotificationChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :notification_channels do |t|
      t.string :name
    end
  end
end
