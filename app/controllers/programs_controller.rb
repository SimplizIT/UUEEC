class ProgramsController < ApplicationController

  def index
  end

  def new
    if current_user
      @user = current_user
      @user.children.build
    end
  end

  def create
    p '%' * 60
    p params
  end

  def update
    p '+' * 60
    p params
    p params[:children]

    user = current_user
    user_updated = user.update_attributes(user_update_params)
    child = user.children.create(create_children_params)
    if user_updated
      flash[:success] = 'Application Submitted' 
      respond_to do |format|
        format.html { redirect_to new_program_path }
      end  
    else
      if user.errors.messages.empty?
        flash[:error] = 'Submittion did not occur'
        redirect_to new_program_path
      else
        redirect_to new_program_path
        user.errors.messages.each do |error|
          flash[:error] = error[1][0].to_s
        end
      end    
    end
    
  end

  private

  def create_children_params
    params.require(:children).permit!
  end

  def user_update_params
    params.require(:user).permit!
  end
end
