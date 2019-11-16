class EventTemplate < ApplicationRecord
  belongs_to :event_template_list
  has_many :event_template_organisation_units
  has_many :organisation_units, through: :event_template_organisation_units
  has_many :events

  validates :name, presence: true

  def etl
    self.event_template_list
  end

  def ous
    self.organisation_units
  end

  def es
    self.events
  end

end
