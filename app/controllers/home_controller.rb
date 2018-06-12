class HomeController < ApplicationController

  def index
    # @coordinates = Coordinates.new(body["lat"], body["lng"])
  end

  def apiCall
    # # binding.pry
    # zip_code = ""
    # uri = "https://www.zipcodeapi.com/rest/jyxRYlYW9WIiXTZgBppSKmUqzxsb8FTeTHZZe4d5cZIFwPZijs3UrvYvJGrlvPt1/info.json/#{zip_code}/degrees"
    # response = HTTParty.get(uri)
    # body = JSON.parse(response.body)
    # return {"this": 2}
  end
end
