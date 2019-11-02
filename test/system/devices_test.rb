require "application_system_test_case"

class DevicesTest < ApplicationSystemTestCase
  setup do
    @device = devices(:one)
  end

  test "visiting the index" do
    visit devices_url
    assert_selector "h1", text: "Devices"
  end

  test "creating a Device" do
    visit devices_url
    click_on "New Device"

    fill_in "App eui", with: @device.app_eui
    fill_in "App key", with: @device.app_key
    fill_in "Dev eui", with: @device.dev_eui
    fill_in "Device type", with: @device.device_type
    fill_in "Fw versioin", with: @device.fw_versioin
    fill_in "Hw version", with: @device.hw_version
    fill_in "Name", with: @device.name
    click_on "Create Device"

    assert_text "Device was successfully created"
    click_on "Back"
  end

  test "updating a Device" do
    visit devices_url
    click_on "Edit", match: :first

    fill_in "App eui", with: @device.app_eui
    fill_in "App key", with: @device.app_key
    fill_in "Dev eui", with: @device.dev_eui
    fill_in "Device type", with: @device.device_type
    fill_in "Fw versioin", with: @device.fw_versioin
    fill_in "Hw version", with: @device.hw_version
    fill_in "Name", with: @device.name
    click_on "Update Device"

    assert_text "Device was successfully updated"
    click_on "Back"
  end

  test "destroying a Device" do
    visit devices_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Device was successfully destroyed"
  end
end
