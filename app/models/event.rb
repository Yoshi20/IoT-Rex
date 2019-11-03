class Event < ApplicationRecord
  belongs_to :device
  belongs_to :event_template
  belongs_to :user_group

end
