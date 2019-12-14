class OrganisationUnit < ApplicationRecord
  belongs_to :organisation
  has_many :device_types, dependent: :destroy
  has_many :event_template_organisation_units
  has_many :users, dependent: :destroy

  has_many :events, through: :event_templates, dependent: :destroy
  has_many :event_templates, through: :event_template_organisation_units, dependent: :destroy

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

  def ets
    self.event_templates
  end

end
