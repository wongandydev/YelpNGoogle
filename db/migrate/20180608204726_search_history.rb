class SearchHistory < ActiveRecord::Migration[5.2]
  def change
    create_table :search_histories do |h|
      h.string :search_item
      h.timestamps
    end
  end
end
