class EventTrigger < ApplicationRecord
  belongs_to :device_configuration
  belongs_to :lora_message_type
  has_many :event_configurations, dependent: :destroy

  def dc
    self.device_configuration
  end

  def lmt
    self.lora_message_type
  end

  def ecs
    self.event_configurations
  end

end
