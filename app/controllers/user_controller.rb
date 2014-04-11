class UserController < ApplicationController

  def index
    if current_user
      @user = current_user
      @userobligations = @user.obligations.currentobligations(Date.today + 1)
      @obligationsupforswap = Obligation.swaps 
      @obligation_offers = []
      if @userobligations
        @userobligations.each do |obligation|
          if !obligation.swaps_offered.empty? 
            offers = {original: [], proposals: []}
            offers[:original].push(obligation)
            obligation.swaps_offered.each do |key, value|
              offers[:proposals].push(Obligation.find(key))
            end
            @obligation_offers.push(offers)
          end
        end
      end
        @obligation_offers
    else
      flash[:error] = 'You must sign in'
      redirect_to root_path
    end
  end

  def update
    user = current_user
    user_updated = user.update_attributes(user_update_params)
    if user_updated
      respond_to do |format|
        format.html { redirect_to user_index_path,  success: 'Profile updated' }
        format.json { render json: user, image: user.image }
        CarrierWave.clean_cached_files!
      end  
    else
      if user.errors.messages.empty?
        flash[:error] = 'Update did not occur'
        redirect_to user_index_path
      else
        redirect_to user_index_path
        user.errors.messages.each do |error|
          flash[:error] = error[1][0].to_s
        end
      end    
    end
  end

  def destroy
    user = User.find(params[:id])
    user.remove_image!
    user.save
    redirect_to user_index_path


  end

  private

  def user_update_params
    params.require(:user).permit!
  end
end