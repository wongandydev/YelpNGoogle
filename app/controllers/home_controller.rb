class HomeController < ApplicationController
  def index
    # @search_history = SearchHistory.new(search_params)
 
    # @search_history.save
    # redirect_to @search_history
    api = HTTParty.get("https://www.zipcodeapi.com/rest/jyxRYlYW9WIiXTZgBppSKmUqzxsb8FTeTHZZe4d5cZIFwPZijs3UrvYvJGrlvPt1/info.json/11203/degrees")
    body = JSON.parse(api.body)
    @coordinates = body["lat"], body["lng"]
  end
end
