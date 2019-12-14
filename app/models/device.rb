class Device < ApplicationRecord
  belongs_to :organisation
  belongs_to :device_type
  has_many :events

  validates :name, :dev_eui, presence: true

  def o
    self.organisation
  end

  def organisation_unit
    OrganisationUnit.find(self.organisation_unit_id) if self.organisation_unit_id.present?
  end

  def ou
    self.organisation_unit
  end

  def device_configuration
    DeviceConfiguration.find(self.device_configuration_id) if self.device_configuration_id.present?
  end

  def dc
    self.device_configuration
  end

  def es
    self.events
  end

end
