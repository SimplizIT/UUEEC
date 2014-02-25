class ObligationsController < ApplicationController
  # load_and_authorize_resource
  def index
    @obligations = Obligation.all
    @obligation = Obligation.new
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @obligations }
    end
  end

  def new
    @obligation = Obligation.new
  end

  def create
    current_user.obligations.create(obligation_params)
    redirect_to obligations_path
  end

  def show
  end

  def edit
  end

  def update
    obligation = current_user.obligations.find(params[:id])
    if obligation
      message = obligation.swapremove(obligation, params[:swapremove])
      p '&' * 80
      p message[:flashkey]
      p message[:flashvalue]
      flash[message[:flashkey.to_sym]] = message[:flashvalue]
      redirect_to user_index_path
    else
      flash[:error] = 'You cannot update this obligation'
      redirect_to user_index_path
    end
  end

  def destroy
    event = Obligation.find(params[:id])
    if event.user.id == current_user.id
      event.delete
    else
      flash[:error] = 'Access is denied for this action.'
      redirect_to obligations_path
    end
  end

  private

  def obligation_params
    params.require(:obligation).permit!
  end
end
