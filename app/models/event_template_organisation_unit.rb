class EventTemplateOrganisationUnit < ApplicationRecord
  belongs_to :event_template
  belongs_to :organisation_unit
end
