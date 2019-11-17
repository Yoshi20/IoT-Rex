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

Organisation.create(name: 'Embedded Science')
OrganisationUnit.create(name: 'IoT-Rex', organisation: Organisation.find_by(name: 'Embedded Science'))
User.create(email: 'jh@oxon.ch', password: ENV['MY_PASSWORD'], password_confirmation: ENV['MY_PASSWORD'], role: Role.find_by(name: 'Super-Admin'), organisation_unit: OrganisationUnit.find_by(name: 'IoT-Rex'))
