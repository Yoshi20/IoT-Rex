class Event < ApplicationRecord
  belongs_to :device
  belongs_to :event_template

  def d
    self.device
  end

  def et
    self.event_template
  end

end
