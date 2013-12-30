class RolesController < ApplicationController
  helper_method :sort_column, :sort_direction

  def index
    @all_users = User.order(sort_column + " " + sort_direction)
  end
  def update
    p "&" * 80
    p params[:format]
    user = User.find(params[:format])
    user.roles = params[:user][:roles]
    user.save
    redirect_to root_path
  end

  private
  
  def sort_column
    User.column_names.include?(params[:sort]) ?  params[:sort] : 'last'
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : 'asc'
  end
end
