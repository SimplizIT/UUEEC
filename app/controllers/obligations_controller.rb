class ObligationsController < ApplicationController
  # load_and_authorize_resource

rescue_from StandardError, with: :obligation_create_errors
# rescue_from ActiveRecord::RecordInvalid, with: :obligation_create_errors

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
      
        obligation = current_user.obligations.create(obligation_params)
      
      if obligation
        flash[:notice] = 'Obligation Created'
        redirect_to obligations_path
      else
        flash[:error] = 'Obligation could not be created'
      end
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


    elsif params.has_key?('swap_offered_remove')
      
      p params

      obligation = Obligation.find(params[:id])
      if obligation
        p obligation.swaps_offered
        obligation.swaps_offered.delete_if { |key, value| key == params[:swap_offered_remove] && value == current_user.id.to_s }
        p '%^%$' * 90
        p obligation.swaps_offered
        obligation.swaps_offered_will_change!
        obligation.save
        flash[:notice] = 'Obligation proposal removed'
        redirect_to user_index_path
      else
        flash[:error] = 'You cannot update this obligation'
        redirect_to user_index_path
      end


    elsif params.has_key?('swap_offered')
      # This step adds a users swop to another user's potential swop que
      p '%' * 90
      p params
      originalswap = Obligation.find(params[:originalswap])

      if !params[:swap_offered].empty? && originalswap
        params[:swap_offered].each do |swop|
          obligation = current_user.obligations.find(swop)
          if obligation
            originalswap.swaps_offered[obligation.id] = obligation.user_id
            originalswap.swaps_offered_will_change!
            originalswap.save
          end
        end
        flash[:notice] = 'Swop Offered to Member.'
        redirect_to user_index_path
      else 
        flash[:error] = 'Contact System Admin code obligation203'
        redirect_to user_index_path
      end
    elsif params.has_key?('swap_these_obligations')
      # This step swops one user's obligation, for another members olbligation
      p '^' * 80
      p params

      original_swop = current_user.obligations.find(params[:originalswap])
      selected_swop = Obligation.find(params[:swap_these_obligations])
      p '%' * 10
      p 'hello'
      if original_swop && selected_swop
        p '%' * 10
      p 'goodbye'
      Obligation.swop_these_obligations(original_swop, selected_swop)


        flash[:notice] = 'Switch successful!'
        redirect_to user_index_path
      else
        flash[:error] = 'Switch was not successful.'
        redirect_to user_index_path
      end
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

  def obligation_create_errors(exception)
    p '()' * 30
    p exception
    error_message = exception.error.match(/(?<=ERROR:  )(\w+\s)+/)[0]
    if error_message == 'duplicate key value violates unique constraint '
      flash[:error] = 'You already have an obligation for that date'
      redirect_to obligations_path
    else
      flash[:error] = 'Submit a bug report error code obligation_create_errors'
      redirect_to obligations_path
    end
  end
end
