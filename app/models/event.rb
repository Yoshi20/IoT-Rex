class Event < ApplicationRecord
  belongs_to :device
  belongs_to :event_configuration

  def d
    self.device
  end

  def ec
    self.event_configuration
  end

end
