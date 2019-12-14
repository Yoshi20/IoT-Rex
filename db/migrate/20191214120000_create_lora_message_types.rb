class CreateLoraMessageTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :lora_message_types do |t|
      t.string :message_id
      t.string :message_text
    end
  end
end
