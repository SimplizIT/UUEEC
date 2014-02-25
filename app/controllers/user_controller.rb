class UserController < ApplicationController

  def index
    if current_user
      @user = current_user
      @userobligations = @user.obligations.currentobligations(Date.today + 1)
      @obligationsupforswap = Obligation.swaps if !Obligation.swaps.empty?
      p '%' * 80
      p @obligationsupforswap
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