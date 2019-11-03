require 'test_helper'

class EventTemplateListsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event_template_list = event_template_lists(:one)
  end

  test "should get index" do
    get event_template_lists_url
    assert_response :success
  end

  test "should get new" do
    get new_event_template_list_url
    assert_response :success
  end

  test "should create event_template_list" do
    assert_difference('EventTemplateList.count') do
      post event_template_lists_url, params: { event_template_list: { channel: @event_template_list.channel, device_type: @event_template_list.device_type, name: @event_template_list.name } }
    end

    assert_redirected_to event_template_list_url(EventTemplateList.last)
  end

  test "should show event_template_list" do
    get event_template_list_url(@event_template_list)
    assert_response :success
  end

  test "should get edit" do
    get edit_event_template_list_url(@event_template_list)
    assert_response :success
  end

  test "should update event_template_list" do
    patch event_template_list_url(@event_template_list), params: { event_template_list: { channel: @event_template_list.channel, device_type: @event_template_list.device_type, name: @event_template_list.name } }
    assert_redirected_to event_template_list_url(@event_template_list)
  end

  test "should destroy event_template_list" do
    assert_difference('EventTemplateList.count', -1) do
      delete event_template_list_url(@event_template_list)
    end

    assert_redirected_to event_template_lists_url
  end
end
