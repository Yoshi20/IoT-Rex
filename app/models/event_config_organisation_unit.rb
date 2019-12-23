class EventConfigOrganisationUnit < ApplicationRecord
  belongs_to :event_configuration
  belongs_to :organisation_unit
end
