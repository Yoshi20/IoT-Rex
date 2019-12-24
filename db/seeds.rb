# Static tables:
Role.create([
  { name: 'Viewer',     rights: 5 },
  { name: 'User',       rights: 10 },
  { name: 'Manager',    rights: 15 },
  { name: 'Admin',      rights: 20 },
  { name: 'SuperAdmin', rights: 9001 }
])

DeviceType.create([
  { name: 'LoRa-Panel',     number_of_buttons: 6 },
  { name: 'LoRa-EPD-4Btns', number_of_buttons: 4 },
  { name: 'LoRa-EPD-2Btns', number_of_buttons: 2 },
  { name: 'LoRa-Wristband', number_of_buttons: 1 }
])

LoraMessageType.create([
  { message_id: '00', message_text: 'heartbeat' },
  { message_id: '20', message_text: 'any button clicked' },
  { message_id: '21', message_text: 'any button clicked with image ID' },
  { message_id: '22', message_text: 'specific button clicked' }
])

NotificationChannel.create([
  { name: 'app' },
  { name: 'email' },
  { name: 'sms' },
  { name: 'post_request' }
])

# Super admins:
Contact.create(company: "Embedded Science", first_name: "Jascha", last_name: "Haldemann", email: "jh@oxon.ch", delivery_address: "OXON AG, Waldeggstrasse 47, 3097 Liebefeld")
Organisation.create(name: 'Embedded Science', contact: Contact.find_by(email: "jh@oxon.ch"))
OrganisationUnit.create(name: 'IoT-Rex', administration: true, organisation: Organisation.find_by(name: 'Embedded Science')) unless OrganisationUnit.find_by(name: 'IoT-Rex').present?
User.create(name: 'Jascha Haldemann',   email: 'jh@oxon.ch', password: ENV['MY_PASSWORD'], password_confirmation: ENV['MY_PASSWORD'], role: Role.find_by(name: 'SuperAdmin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))
User.create(name: 'Tobias Meerstetter', email: 'tm@oxon.ch', password: '123456',           password_confirmation: '123456',           role: Role.find_by(name: 'SuperAdmin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))
User.create(name: 'Simon Scheurer',     email: 'ss@oxon.ch', password: '123456',           password_confirmation: '123456',           role: Role.find_by(name: 'SuperAdmin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))

# Test entries:
Contact.create(company: "TestOrganisation1", first_name: "bla", last_name: "blup", email: "testUser@111.ch", delivery_address: "asdf")
Organisation.create(name: 'TestOrganisation1', contact: Contact.find_by(email: "testUser@111.ch"))
OrganisationUnit.create(name: 'TestOrganisationUnit11', administration: true, organisation: Organisation.find_by(name: 'TestOrganisation1')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit11').present?
User.create(name: 'TestUser111', email: 'testUser@111.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
User.create(name: 'TestUser112', email: 'testUser@112.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
User.create(name: 'TestUser113', email: 'testUser@113.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11'))
OrganisationUnit.create(name: 'TestOrganisationUnit12', organisation: Organisation.find_by(name: 'TestOrganisation1')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit12').present?
User.create(name: 'TestUser121', email: 'testUser@121.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit12'))
User.create(name: 'TestUser122', email: 'testUser@122.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit12'))
User.create(name: 'TestUser123', email: 'testUser@123.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit12'))
OrganisationUnit.create(name: 'TestOrganisationUnit13', organisation: Organisation.find_by(name: 'TestOrganisation1')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit13').present?
User.create(name: 'TestUser131', email: 'testUser@131.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit13'))
User.create(name: 'TestUser132', email: 'testUser@132.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit13'))
User.create(name: 'TestUser133', email: 'testUser@133.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit13'))
DeviceConfiguration.create(name: 'TestDeviceConfiguration111', device_type: DeviceType.find_by(name: 'LoRa-Panel'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit11')) unless DeviceConfiguration.find_by(name: 'TestDeviceConfiguration111').present?
EventTrigger.create(button_number: 1, lora_message_type: LoraMessageType.find_by(message_id: '22'), device_configuration: DeviceConfiguration.find_by(name: 'TestDeviceConfiguration111')) unless EventTrigger.find_by(button_number: 1).present?
EventConfiguration.create(text: 'TestEventConfiguration11111', level: 1, acknowledged_event_id: nil, notification_channel: NotificationChannel.find_by(name: 'app'), event_trigger: EventTrigger.find_by(button_number: 1), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11')]) unless EventConfiguration.find_by(text: 'TestEventConfiguration11111').present?
EventConfiguration.create(text: 'TestEventConfiguration11112', level: 2, acknowledged_event_id: EventConfiguration.find_by(text: 'TestEventConfiguration11111').id, notification_channel: NotificationChannel.find_by(name: 'app'), event_trigger: EventTrigger.find_by(button_number: 1), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11'), OrganisationUnit.find_by(name: 'TestOrganisationUnit12')]) unless EventConfiguration.find_by(text: 'TestEventConfiguration11112').present?
EventConfiguration.create(text: 'TestEventConfiguration11113', level: 3, acknowledged_event_id: EventConfiguration.find_by(text: 'TestEventConfiguration11112').id, notification_channel: NotificationChannel.find_by(name: 'app'), event_trigger: EventTrigger.find_by(button_number: 1), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11'), OrganisationUnit.find_by(name: 'TestOrganisationUnit12'), OrganisationUnit.find_by(name: 'TestOrganisationUnit13')]) unless EventConfiguration.find_by(text: 'TestEventConfiguration11113').present?
EventTrigger.create(button_number: 2, lora_message_type: LoraMessageType.find_by(message_id: '22'), device_configuration: DeviceConfiguration.find_by(name: 'TestDeviceConfiguration111')) unless EventTrigger.find_by(button_number: 2).present?
EventConfiguration.create(text: 'TestEventConfiguration11121', level: 1, acknowledged_event_id: nil, notification_channel: NotificationChannel.find_by(name: 'app'), event_trigger: EventTrigger.find_by(button_number: 2), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11')]) unless EventConfiguration.find_by(text: 'TestEventConfiguration11121').present?
EventConfiguration.create(text: 'TestEventConfiguration11122', level: 2, acknowledged_event_id: EventConfiguration.find_by(text: 'TestEventConfiguration11121').id, notification_channel: NotificationChannel.find_by(name: 'app'), event_trigger: EventTrigger.find_by(button_number: 2), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11'), OrganisationUnit.find_by(name: 'TestOrganisationUnit12')]) unless EventConfiguration.find_by(text: 'TestEventConfiguration11122').present?
EventConfiguration.create(text: 'TestEventConfiguration11123', level: 3, acknowledged_event_id: EventConfiguration.find_by(text: 'TestEventConfiguration11122').id, notification_channel: NotificationChannel.find_by(name: 'app'), event_trigger: EventTrigger.find_by(button_number: 2), organisation_units: [OrganisationUnit.find_by(name: 'TestOrganisationUnit11'), OrganisationUnit.find_by(name: 'TestOrganisationUnit12'), OrganisationUnit.find_by(name: 'TestOrganisationUnit13')]) unless EventConfiguration.find_by(text: 'TestEventConfiguration11123').present?
Device.create(name: 'TestDevice11', dev_eui: '11', organisation: Organisation.find_by(name: 'TestOrganisation1'), device_type: DeviceType.find_by(name: 'LoRa-Panel'),     organisation_unit_id: OrganisationUnit.find_by(name: 'TestOrganisationUnit11').id, device_configuration_id: DeviceConfiguration.find_by(name: 'TestDeviceConfiguration111').id) unless Device.find_by(name: 'TestDevice11').present?
Device.create(name: 'TestDevice12', dev_eui: '12', organisation: Organisation.find_by(name: 'TestOrganisation1'), device_type: DeviceType.find_by(name: 'LoRa-EPD-4Btns'), organisation_unit_id: OrganisationUnit.find_by(name: 'TestOrganisationUnit12').id) unless Device.find_by(name: 'TestDevice12').present?
Device.create(name: 'TestDevice13', dev_eui: '13', organisation: Organisation.find_by(name: 'TestOrganisation1'), device_type: DeviceType.find_by(name: 'LoRa-Wristband')) unless Device.find_by(name: 'TestDevice13').present?

Contact.create(company: "TestOrganisation2", first_name: "bla", last_name: "blup", email: "testUser@211.ch", delivery_address: "asdf")
Organisation.create(name: 'TestOrganisation2', contact: Contact.find_by(email: "testUser@211.ch"))
OrganisationUnit.create(name: 'TestOrganisationUnit21', administration: true, organisation: Organisation.find_by(name: 'TestOrganisation2')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit21').present?
User.create(name: 'TestUser211', email: 'testUser@211.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit21'))
User.create(name: 'TestUser212', email: 'testUser@212.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit21'))
User.create(name: 'TestUser213', email: 'testUser@213.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit21'))
OrganisationUnit.create(name: 'TestOrganisationUnit22', organisation: Organisation.find_by(name: 'TestOrganisation2')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit22').present?
User.create(name: 'TestUser221', email: 'testUser@221.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit22'))
User.create(name: 'TestUser222', email: 'testUser@222.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit22'))
User.create(name: 'TestUser223', email: 'testUser@223.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit22'))
OrganisationUnit.create(name: 'TestOrganisationUnit23', organisation: Organisation.find_by(name: 'TestOrganisation2')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit23').present?
User.create(name: 'TestUser231', email: 'testUser@231.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit23'))
User.create(name: 'TestUser232', email: 'testUser@232.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit23'))
User.create(name: 'TestUser233', email: 'testUser@233.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit23'))

Contact.create(company: "TestOrganisation3", first_name: "bla", last_name: "blup", email: "testUser@311.ch", delivery_address: "asdf")
Organisation.create(name: 'TestOrganisation3', contact: Contact.find_by(email: "testUser@311.ch"))
OrganisationUnit.create(name: 'TestOrganisationUnit31', administration: true, organisation: Organisation.find_by(name: 'TestOrganisation3')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit31').present?
User.create(name: 'TestUser311', email: 'testUser@311.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit31'))
User.create(name: 'TestUser312', email: 'testUser@312.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit31'))
User.create(name: 'TestUser313', email: 'testUser@313.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit31'))
OrganisationUnit.create(name: 'TestOrganisationUnit32', organisation: Organisation.find_by(name: 'TestOrganisation3')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit32').present?
User.create(name: 'TestUser321', email: 'testUser@321.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit32'))
User.create(name: 'TestUser322', email: 'testUser@322.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit32'))
User.create(name: 'TestUser323', email: 'testUser@323.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit32'))
OrganisationUnit.create(name: 'TestOrganisationUnit33', organisation: Organisation.find_by(name: 'TestOrganisation3')) unless OrganisationUnit.find_by(name: 'TestOrganisationUnit33').present?
User.create(name: 'TestUser331', email: 'testUser@331.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'User'),    organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit33'))
User.create(name: 'TestUser332', email: 'testUser@332.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Manager'), organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit33'))
User.create(name: 'TestUser333', email: 'testUser@333.ch', password: '123456', password_confirmation: '123456', role: Role.find_by(name: 'Admin'),   organisation_unit: OrganisationUnit.find_by(name: 'TestOrganisationUnit33'))
