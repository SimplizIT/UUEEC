class UserController < ApplicationController

  def index
    if current_user
      @user = current_user
      @userobligations = @user.obligations.currentobligations(Date.today + 1)
      @obligationsupforswap = Obligation.swaps if !Obligation.swaps.empty?
      @obligation_offers = []
      if @userobligations
        @userobligations.each do |obligation|
          p obligation
          if !obligation.swap_proposals.empty? 
            offers = {original: [], proposals: []}
            offers[:original].push(obligation)
            obligation.swap_proposals.each do |swap|
              offers[:proposals].push(Obligation.find(swap))
            end
            @obligation_offers.push(offers)
          end
        end
      end
      p '5' * 90
        p @obligation_offers
    else
      flash[:error] = 'You must sign in'
      redirect_to root_path
    end
  end

  def update
    if current_user.update_attributes(user_update_params)
      flash[:success] = 'Profile updated'
      redirect_to user_index_path
    else
      flash[:error] = 'Update did not occur'
    end
  end

  private

  def user_update_params
    params.require(:user).permit!
  end
end