class HomeController < ApplicationController
  Coordinates = Struct.new(:lat, :long)

  def index
    zip_code = "10002"
    body = apiCall(zip_code)
    @coordinates = Coordinates.new(body["lat"], body["lng"])
  end

  def apiCall(zip_code)
    uri = "https://www.zipcodeapi.com/rest/jyxRYlYW9WIiXTZgBppSKmUqzxsb8FTeTHZZe4d5cZIFwPZijs3UrvYvJGrlvPt1/info.json/#{zip_code}/degrees"
    response = HTTParty.get(uri)
    return JSON.parse(response.body)

  end
end
