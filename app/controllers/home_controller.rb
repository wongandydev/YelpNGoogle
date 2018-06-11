class HomeController < ApplicationController
  def index
    # @search_history = SearchHistory.new(search_params)
 
    # @search_history.save
    # redirect_to @search_history
  end

  def show
    # @search_history = SearchHistory.find(params[:id])
    
  end


  private 
  def search_params
    # params.require("search_history").permit("search_item")  
  end
end
