class Device < ApplicationRecord
  belongs_to :event_template_list
  belongs_to :user_group

  validates :name, :device_type, :dev_eui, presence: true

end
