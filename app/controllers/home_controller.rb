class HomeController < ApplicationController
  Coordinates = Struct.new(:lat, :long)

  def index
    # @coordinates = Coordinates.new(body["lat"], body["lng"])
  end

  def apiCall
    binding.pry
    uri = "https://www.zipcodeapi.com/rest/jyxRYlYW9WIiXTZgBppSKmUqzxsb8FTeTHZZe4d5cZIFwPZijs3UrvYvJGrlvPt1/info.json/#{zip_code}/degrees"
    response = HTTParty.get(uri)
    body = JSON.parse(response.body)
    return uri
  end
end
