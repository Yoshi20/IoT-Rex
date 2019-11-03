class EventTemplateList < ApplicationRecord
  belongs_to :user_group
  has_many :devices
  has_many :event_templates, dependent: :destroy

  validates :name, presence: true

end
