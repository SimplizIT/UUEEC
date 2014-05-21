class WelcomeController < ApplicationController

  def index
    @visitor = Visitor.new
  end

  def staff
    @all_staff = User.all
  end
end
