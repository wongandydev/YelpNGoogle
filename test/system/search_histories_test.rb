require "application_system_test_case"

class SearchHistoriesTest < ApplicationSystemTestCase
  setup do
    @search_history = search_histories(:one)
  end

  test "visiting the index" do
    visit search_histories_url
    assert_selector "h1", text: "Search Histories"
  end

  test "creating a Search history" do
    visit search_histories_url
    click_on "New Search History"

    fill_in "Search Item", with: @search_history.search_item
    click_on "Create Search history"

    assert_text "Search history was successfully created"
    click_on "Back"
  end

  test "updating a Search history" do
    visit search_histories_url
    click_on "Edit", match: :first

    fill_in "Search Item", with: @search_history.search_item
    click_on "Update Search history"

    assert_text "Search history was successfully updated"
    click_on "Back"
  end

  test "destroying a Search history" do
    visit search_histories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Search history was successfully destroyed"
  end
end
