class User < ApplicationRecord
  belongs_to :user_group

  before_validation :strip_whitespace

  validates :username, :email,
    presence: true,
    uniqueness: { case_sensitive: false }

  validates :encrypted_password, presence: true

  validate :validate_username

  def strip_whitespace
    self.username.try(:strip!)
    self.email.try(:strip!)
  end

  def validate_username
    if username == email
      errors.add(:username, "can not be the same as Email")
    elsif username == email || User.where(email: username).exists?
      errors.add(:username, :invalid)
    end
  end

  def admin?
    self.is_admin == true
  end

  def super_admin?
    self.is_super_admin == true
  end

end
