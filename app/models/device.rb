class Device < ApplicationRecord
  belongs_to :organisation
  belongs_to :device_type
  has_many :events

  validates :name, :device_type, :dev_eui, presence: true

  def o
    self.organisation
  end

  def organisation_unit
    OrganisationUnit.find(self.organisation_unit_id) if self.organisation_unit_id.present?
  end

  def ou
    self.organisation_unit
  end

  def event_template_list
    EventTemplateList.find(self.event_template_list_id) if self.event_template_list_id.present?
  end

  def etl
    self.event_template_list
  end

  def es
    self.events
  end

end
