class RegistrationsController < Devise::RegistrationsController
  protected

  def after_sign_up_path_for(user)
    if params.include?('program_application')
      '/programs/new'
    else
      '/user'
    end
  end
end
