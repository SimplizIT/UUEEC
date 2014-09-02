class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = 'Access is denied for this action.'
    redirect_to root_url
  end

  def index # this is for angular take out if needed.
  end

  # This is a workaround for CanCan until updated for rails 4.0 - Remove after CanCan update
  before_filter do
    resource = controller_name.singularize.to_sym
    method = "#{resource}_params"
    params[resource] &&= send(method) if respond_to?(method, true)
  end
end
