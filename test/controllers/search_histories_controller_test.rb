require 'test_helper'

class SearchHistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @search_history = search_histories(:one)
  end

  test "should get index" do
    get search_histories_url
    assert_response :success
  end

  test "should get new" do
    get new_search_history_url
    assert_response :success
  end

  test "should create search_history" do
    assert_difference('SearchHistory.count') do
      post search_histories_url, params: { search_history: { search_item: @search_history.search_item } }
    end

    assert_redirected_to search_history_url(SearchHistory.last)
  end

  test "should show search_history" do
    get search_history_url(@search_history)
    assert_response :success
  end

  test "should get edit" do
    get edit_search_history_url(@search_history)
    assert_response :success
  end

  test "should update search_history" do
    patch search_history_url(@search_history), params: { search_history: { search_item: @search_history.search_item } }
    assert_redirected_to search_history_url(@search_history)
  end

  test "should destroy search_history" do
    assert_difference('SearchHistory.count', -1) do
      delete search_history_url(@search_history)
    end

    assert_redirected_to search_histories_url
  end
end
