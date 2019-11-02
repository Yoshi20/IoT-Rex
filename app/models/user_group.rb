class UserGroup < ApplicationRecord
  has_many :devices, dependent: :destroy
  has_many :users, dependent: :destroy

  validates :name, presence: true, uniqueness: true

end
