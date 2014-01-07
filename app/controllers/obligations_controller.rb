class ObligationsController < ApplicationController
  def index
    @obligations = Obligation.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @obligations }
    end
  end

  def new
    @obligation = Obligation.new
  end

  def create
    p '$' * 80
    p params
    # current_user.obligations.create(obligation_params)
    # redirect_to obligations_path
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def obligation_params
    params.require(:obligation).permit!
  end
end
