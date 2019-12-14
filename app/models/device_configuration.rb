class DeviceConfiguration < ApplicationRecord
  belongs_to :device_type
  belongs_to :organisation_unit
  has_many :devices
  has_many :event_triggers, dependent: :destroy

  validates :name, presence: true

  def ou
    self.organisation_unit
  end

  def ds
    self.devices
  end

  def ets
    self.event_triggers
  end

end
