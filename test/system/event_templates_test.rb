require "application_system_test_case"

class EventTemplatesTest < ApplicationSystemTestCase
  setup do
    @event_template = event_templates(:one)
  end

  test "visiting the index" do
    visit event_templates_url
    assert_selector "h1", text: "Event Templates"
  end

  test "creating a Event template" do
    visit event_templates_url
    click_on "New Event Template"

    fill_in "Name", with: @event_template.name
    fill_in "Static data", with: @event_template.static_data
    click_on "Create Event template"

    assert_text "Event template was successfully created"
    click_on "Back"
  end

  test "updating a Event template" do
    visit event_templates_url
    click_on "Edit", match: :first

    fill_in "Name", with: @event_template.name
    fill_in "Static data", with: @event_template.static_data
    click_on "Update Event template"

    assert_text "Event template was successfully updated"
    click_on "Back"
  end

  test "destroying a Event template" do
    visit event_templates_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Event template was successfully destroyed"
  end
end
