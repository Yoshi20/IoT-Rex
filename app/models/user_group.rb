class UserGroup < ApplicationRecord
  has_many :devices, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :event_templates, dependent: :destroy
  has_many :event_template_lists, dependent: :destroy
  has_many :users, dependent: :destroy

  validates :name, presence: true, uniqueness: true

end
