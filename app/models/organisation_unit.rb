class OrganisationUnit < ApplicationRecord
  belongs_to :organisation
  has_many :device_types, dependent: :destroy
  has_many :event_configuration_organisation_units
  has_many :users, dependent: :destroy

  has_many :events, through: :event_configurations, dependent: :destroy
  has_many :event_configurations, through: :event_configuration_organisation_units, dependent: :destroy

  def o
    self.organisation
  end

  def dts
    self.device_types
  end

  def us
    self.users
  end

  def es
    self.events
  end

  def ecs
    self.event_configurations
  end

end
