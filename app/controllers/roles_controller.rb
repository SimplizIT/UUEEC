class RolesController < ApplicationController
  def update
    p '$' * 80
    p params[:user][:roles]
    user = current_user
    user.roles=params[:user][:roles]
    user.save
    redirect_to root_path
  end

  private

end
