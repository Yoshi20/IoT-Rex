class Role < ApplicationRecord
  has_many :users

  validates :name, :rights, presence: true, uniqueness: true

end
