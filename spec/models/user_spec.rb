require 'rails_helper'

RSpec.describe User, type: :model do
  it "can be created" do
    u = User.new(email: "a@a.ch", password: "aaaaaa", password_confirmation: "aaaaaa")
    u.organisation_unit = 
    u.save
    expect(u).to be_vaild
    pp u.errors
  end

end
