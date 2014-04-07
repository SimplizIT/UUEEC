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
    if current_user
      current_user.obligations.create(obligation_params)
      redirect_to obligations_path
    else
      flash[:error] = 'You must be signed in'
        redirect_to obligation_path
    end
  end

  def show
  end

  def edit

  end

  def update
   

    if params.has_key?('swapremove')
      obligation = current_user.obligations.find(params[:id])
      if obligation
        message = obligation.swapremove(obligation, params[:swapremove])
        flash[message[:flashkey.to_sym]] = message[:flashvalue]
        redirect_to user_index_path
      else
        flash[:error] = 'You cannot update this obligation'
        redirect_to user_index_path
      end
    elsif params.has_key?('swap_offered')
      p '^' * 80
      p params
      obligation = current_user.obligations.find(params[:swap_offered])
      if obligation
        originalswap = Obligation.find(params[:originalswap])
        originalswap.swap_proposals.push(obligation.id) if !originalswap.swap_proposals.include?(obligation.id.to_s)
        originalswap.swap_proposals_will_change!
        originalswap.save
        p '&' * 80
        p originalswap
        redirect_to user_index_path
      else 
        flash[:error] = 'Contact System Admin'
        redirect_to user_index_path
      end
    elsif params.has_key?('swap_these_obligations')
      p '^' * 80
      p params
      current_user_obligation = current_user.obligations.find(params[:originalswap])
      selected_proposal_from_other = Obligation.find(params[:swap_these_obligations])

      current_user_obligation.user_id = selected_proposal_from_other.user_id
      current_user_obligation.title = selected_proposal_from_other.title
      current_user_obligation.up_for_swap = false

      selected_proposal_from_other.user_id = current_user.id
      selected_proposal_from_other.title = current_user.first_name + ' ' + current_user.last_name

      current_user_obligation.swap_proposals.clear
      current_user_obligation.swap_proposals_will_change!
      current_user_obligation.save

      selected_proposal_from_other.swap_proposals.clear
      selected_proposal_from_other.swap_proposals_will_change!
      selected_proposal_from_other.save

      redirect_to user_index_path
    else
      flash[:error] = 'Access is denied for this action.'
      redirect_to obligations_path
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
