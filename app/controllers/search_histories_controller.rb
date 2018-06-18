class SearchHistoriesController < ApplicationController
  before_action :set_search_history, only: [:show, :edit, :update, :destroy]

  # GET /search_histories
  # GET /search_histories.json
  def index
    @search_histories = SearchHistory.all
  end

  # GET /search_histories/1
  # GET /search_histories/1.json
  def show
  end

  # GET /search_histories/new
  def new
    @search_history = SearchHistory.new
  end

  # GET /search_histories/1/edit
  def edit
  end

  # POST /search_histories
  # POST /search_histories.json
  def create
    @search_history = SearchHistory.new(search_history_params)

    respond_to do |format|
      if @search_history.save
        format.html { redirect_to @search_history, notice: 'Search history was successfully created.' }
        format.json { render :show, status: :created, location: @search_history }
      else
        format.html { render :new }
        format.json { render json: @search_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /search_histories/1
  # PATCH/PUT /search_histories/1.json
  def update
    respond_to do |format|
      if @search_history.update(search_history_params)
        format.html { redirect_to @search_history, notice: 'Search history was successfully updated.' }
        format.json { render :show, status: :ok, location: @search_history }
      else
        format.html { render :edit }
        format.json { render json: @search_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /search_histories/1
  # DELETE /search_histories/1.json
  def destroy
    @search_history.destroy
    respond_to do |format|
      format.html { redirect_to search_histories_url, notice: 'Search history was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_search_history
      @search_history = SearchHistory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def search_history_params
      params.require(:search_history).permit(:search_item)
    end
end
