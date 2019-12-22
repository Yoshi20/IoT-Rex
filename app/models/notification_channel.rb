class NotificationChannel < ApplicationRecord
  has_many :event_configurations

  validates :name, presence: true, uniqueness: true

end
