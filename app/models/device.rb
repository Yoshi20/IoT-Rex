class Device < ApplicationRecord
  belongs_to :organisation
  has_one :event_template_list
  has_many :events

  validates :name, :device_type, :dev_eui, presence: true

  def o
    self.organisation
  end

  def etl
    self.event_template_list
  end

  def es
    self.events
  end

end
