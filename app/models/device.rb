class Device < ApplicationRecord
  belongs_to :organisation
  has_many :events

  validates :name, :device_type, :dev_eui, presence: true

  def o
    self.organisation
  end

  def ou
    self.etl.organisation_unit if self.event_template_list_id.present?
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
