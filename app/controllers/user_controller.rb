class UserController < ApplicationController

  def index
    if current_user
      @user = current_user
    else
      flash[:error] = 'You must sign in'
      redirect_to root_path
    end
  end

  def update
    p '%' * 80
    p params
  end
end
