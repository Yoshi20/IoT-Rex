class LoraMessageType < ApplicationRecord
  has_many :event_triggers

  validates :message_id, presence: true, uniqueness: true
  validates :message_text, presence: true

end
