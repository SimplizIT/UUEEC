class WelcomeController < ApplicationController

  def index
    @visitor = Visitor.new
  end
end
