class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JWTBlacklist

  belongs_to :organisation_unit
  belongs_to :role
  has_one :organisation, through: :organisation_unit

  def ou
    self.organisation_unit
  end

  def o
    self.organisation
  end

  def pw
    self.password
  end

  def manager?
    role_name = self.role.name
    role_name == "Manager" || role_name == "Admin" || role_name == "Super-Admin"
  end

  def admin?
    role_name = self.role.name
    role_name == "Admin" || role_name == "Super-Admin"
  end

  def super_admin?
    self.role.name == "Super-Admin"
  end

end
