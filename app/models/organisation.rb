class Organisation < ApplicationRecord
  belongs_to :contact
  has_many :devices, dependent: :destroy
  has_many :organisation_units, dependent: :destroy
  has_many :users, through: :organisation_units


  validates :name, presence: true, uniqueness: true

  def ds
    self.devices
  end

  def ous
    self.organisation_units
  end

  def us
    self.users
  end

end
