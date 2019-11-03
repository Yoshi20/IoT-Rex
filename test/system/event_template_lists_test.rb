require "application_system_test_case"

class EventTemplateListsTest < ApplicationSystemTestCase
  setup do
    @event_template_list = event_template_lists(:one)
  end

  test "visiting the index" do
    visit event_template_lists_url
    assert_selector "h1", text: "Event Template Lists"
  end

  test "creating a Event template list" do
    visit event_template_lists_url
    click_on "New Event Template List"

    fill_in "Channel", with: @event_template_list.channel
    fill_in "Device type", with: @event_template_list.device_type
    fill_in "Name", with: @event_template_list.name
    click_on "Create Event template list"

    assert_text "Event template list was successfully created"
    click_on "Back"
  end

  test "updating a Event template list" do
    visit event_template_lists_url
    click_on "Edit", match: :first

    fill_in "Channel", with: @event_template_list.channel
    fill_in "Device type", with: @event_template_list.device_type
    fill_in "Name", with: @event_template_list.name
    click_on "Update Event template list"

    assert_text "Event template list was successfully updated"
    click_on "Back"
  end

  test "destroying a Event template list" do
    visit event_template_lists_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Event template list was successfully destroyed"
  end
end
