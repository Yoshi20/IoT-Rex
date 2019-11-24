# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Role.create([
  { name: 'Viewer', rights: 5 },
  { name: 'User', rights: 10 },
  { name: 'Manager', rights: 15 },
  { name: 'Admin', rights: 20 },
  { name: 'Super-Admin', rights: 9001 }
])

# Super Admins
Organisation.create(name: 'Embedded Science')
OrganisationUnit.create(name: 'IoT-Rex', organisation: Organisation.find_by(name: 'Embedded Science'))
User.create(name: 'Jascha Haldemann', email: 'jh@oxon.ch', password: ENV['MY_PASSWORD'], password_confirmation: ENV['MY_PASSWORD'], role: Role.find_by(name: 'Super-Admin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))
User.create(name: 'Tobias Meerstetter', email: 'tm@oxon.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Super-Admin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))
User.create(name: 'Simon Scheurer', email: 'ss@oxon.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Super-Admin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))

# Test entries:
Organisation.create(name: 'TestOrganisation1')
OrganisationUnit.create(name: 'TestOrganisationUnit11', organisation: Organisation.find_by(name: 'TestOrganisation1'))
User.create(name: 'TestUser111', email: 'testUser@111.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
User.create(name: 'TestUser112', email: 'testUser@112.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
User.create(name: 'TestUser113', email: 'testUser@113.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
# EventTemplateList.create(name: 'TestEventTemplateList111', device_type: 'ble_lora', channel: 'email', organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
# EventTemplate.create(name: 'TestEventTemplate1111', event_template_list: EventTemplateList.find_by(name: 'TestEventTemplateList111'), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11')])
# EventTemplate.create(name: 'TestEventTemplate1112', event_template_list: EventTemplateList.find_by(name: 'TestEventTemplateList111'), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11'), OrganisationUnit.find_by(name: 'TestOrganisationUnit12')])
OrganisationUnit.create(name: 'TestOrganisationUnit12', organisation: Organisation.find_by(name: 'TestOrganisation1'))
User.create(name: 'TestUser121', email: 'testUser@121.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit12'))
User.create(name: 'TestUser122', email: 'testUser@122.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit12'))
User.create(name: 'TestUser123', email: 'testUser@123.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit12'))
OrganisationUnit.create(name: 'TestOrganisationUnit13', organisation: Organisation.find_by(name: 'TestOrganisation1'))
User.create(name: 'TestUser131', email: 'testUser@131.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit13'))
User.create(name: 'TestUser132', email: 'testUser@132.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit13'))
User.create(name: 'TestUser133', email: 'testUser@133.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit13'))
# Device.create(name: 'TestDevice1', device_type: 'ble_lora', dev_eui: '123', organisation: Organisation.find_by(name: 'TestOrganisation1'))
# Device.create(name: 'TestDevice2', device_type: 'ble_lora', dev_eui: '123', organisation: Organisation.find_by(name: 'TestOrganisation1'))
# Device.create(name: 'TestDevice3', device_type: 'ble_lora', dev_eui: '123', organisation: Organisation.find_by(name: 'TestOrganisation1'))

Organisation.create(name: 'TestOrganisation2')
OrganisationUnit.create(name: 'TestOrganisationUnit21', organisation: Organisation.find_by(name: 'TestOrganisation2'))
User.create(name: 'TestUser211', email: 'testUser@211.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit21'))
User.create(name: 'TestUser212', email: 'testUser@212.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit21'))
User.create(name: 'TestUser213', email: 'testUser@213.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit21'))
OrganisationUnit.create(name: 'TestOrganisationUnit22', organisation: Organisation.find_by(name: 'TestOrganisation2'))
User.create(name: 'TestUser221', email: 'testUser@221.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit22'))
User.create(name: 'TestUser222', email: 'testUser@222.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit22'))
User.create(name: 'TestUser223', email: 'testUser@223.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit22'))
OrganisationUnit.create(name: 'TestOrganisationUnit23', organisation: Organisation.find_by(name: 'TestOrganisation2'))
User.create(name: 'TestUser231', email: 'testUser@231.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit23'))
User.create(name: 'TestUser232', email: 'testUser@232.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit23'))
User.create(name: 'TestUser233', email: 'testUser@233.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit23'))

Organisation.create(name: 'TestOrganisation3')
OrganisationUnit.create(name: 'TestOrganisationUnit31', organisation: Organisation.find_by(name: 'TestOrganisation3'))
User.create(name: 'TestUser311', email: 'testUser@311.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit31'))
User.create(name: 'TestUser312', email: 'testUser@312.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit31'))
User.create(name: 'TestUser313', email: 'testUser@313.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit31'))
OrganisationUnit.create(name: 'TestOrganisationUnit32', organisation: Organisation.find_by(name: 'TestOrganisation3'))
User.create(name: 'TestUser321', email: 'testUser@321.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit32'))
User.create(name: 'TestUser322', email: 'testUser@322.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit32'))
User.create(name: 'TestUser323', email: 'testUser@323.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit32'))
OrganisationUnit.create(name: 'TestOrganisationUnit33', organisation: Organisation.find_by(name: 'TestOrganisation3'))
User.create(name: 'TestUser331', email: 'testUser@331.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit33'))
User.create(name: 'TestUser332', email: 'testUser@332.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit33'))
User.create(name: 'TestUser333', email: 'testUser@333.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit33'))
