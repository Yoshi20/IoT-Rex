class OrganisationUnit < ApplicationRecord
  belongs_to :organisation
  has_many :event_template_lists, dependent: :destroy
  has_many :event_template_organisation_units
  has_many :event_templates, through: :event_template_organisation_units, dependent: :destroy
  has_many :events, through: :event_templates, dependent: :destroy
  has_many :users, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  def o
    self.organisation
  end

  def ets
    self.event_templates
  end

  def us
    self.users
  end

end
