class EventTemplate < ApplicationRecord
  belongs_to :user_group

  validates :name, presence: true

end
