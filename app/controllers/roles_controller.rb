class RolesController < ApplicationController
  # load_and_authorize_resource class: User
  helper_method :sort_column, :sort_direction

  def index

    admins = []
    teachers = []
    volunteers = []
    guests = []

    users = User.order(sort_column + " " + sort_direction)

    users.each do |user|
      if user.roles.include?('admin')
        admins << user
        
      elsif user.roles.include?('teacher')
        teachers << user

      elsif user.roles.include?('volunteer')
        volunteers << user
      else 
        guests << user
      end
    end

    @all_users = {admins: admins, teachers: teachers, volunteers: volunteers, guests: guests}
  end

  def update
    user = User.find(params[:format])
    user.roles = params[:user][:roles]
    user.save
    redirect_to roles_index_path
  end

  private
  
  def sort_column
    User.column_names.include?(params[:sort]) ?  params[:sort] : 'last_name'
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : 'asc'
  end
end


