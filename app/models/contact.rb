class Contact < ApplicationRecord
  has_one :organisation

  validates :first_name, :last_name, :delivery_address, presence: true
  validates :company, :email, presence: true, uniqueness: true

  def o
    self.organisation
  end

end
