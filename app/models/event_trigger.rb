class EventTrigger < ApplicationRecord
  belongs_to :device_configuration
  belongs_to :lora_message_type
  has_many :event_templates, dependent: :destroy

  def dc
    self.device_configuration
  end

  def lmt
    self.lora_message_type
  end

  def ets
    self.event_templates
  end

end
