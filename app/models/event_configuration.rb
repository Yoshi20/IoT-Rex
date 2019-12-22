class EventConfiguration < ApplicationRecord
  belongs_to :event_trigger
  belongs_to :notification_channel
  has_many :event_configuration_organisation_units
  has_many :events

  has_many :organisation_units, through: :event_configuration_organisation_units

  def et
    self.event_trigger
  end

  def nc
    self.notification_channel
  end

  def es
    self.events
  end

  def ous
    self.organisation_units
  end

end
