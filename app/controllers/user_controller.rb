class UserController < ApplicationController

  def index
    @user = current_user
  end

  def update
    p '%' * 80
    p params
  end
end
