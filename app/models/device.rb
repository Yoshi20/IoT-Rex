class Device < ApplicationRecord
  belongs_to :organisation
  has_one :event_template_list
  has_many :events

  validates :name, :device_type, :dev_eui, presence: true

  def self.all_of_current_user(current_user)
    case current_user.role.name
    when "Viewer", "User"
      etl_ids = current_user.ou.etls.map { |etl| etl.id }
      Device.where(event_template_list_id: etl_ids)
    when "Manager"
      etl_ids = current_user.ou.etls.map { |etl| etl.id }
      Device.where(event_template_list_id: etl_ids).or(Device.where(organisation: current_user.o, event_template_list_id: nil))
    when "Admin"
      Device.where(organisation: current_user.o)
    when "Super-Admin"
      Device.all
    else
      raise "User with email = \"#{current_user.email}\" has an invalid role!"
    end
  end

  def o
    self.organisation
  end

  def etl
    self.event_template_list
  end

  def es
    self.events
  end

end
