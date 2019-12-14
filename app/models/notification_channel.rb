class NotificationChannel < ApplicationRecord
  has_many :event_templates

  validates :name, presence: true, uniqueness: true

end
