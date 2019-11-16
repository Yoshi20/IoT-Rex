class EventTemplateList < ApplicationRecord
  belongs_to :organisation_unit
  has_many :devices
  has_many :event_templates, dependent: :destroy

  validates :name, presence: true

  def ou
    self.organisation_unit
  end

  def ds
    self.devices
  end

  def ets
    self.event_templates
  end

end
