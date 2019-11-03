class EventTemplate < ApplicationRecord
  belongs_to :event_template_list
  belongs_to :user_group

  validates :name, presence: true

end
