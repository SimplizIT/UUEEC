class VisitorsController < ApplicationController


  # def index
  #   @visitor = Visitor.new
  # end

  def create
    p '$' * 90
    p params
    @visitor = Visitor.new(visitor_params)

    respond_to do |format|
      if @visitor.save
        VisitorMailer.welcome_email(@visitor).deliver

        format.html { redirect_to root_path, notice: 'An email has been sent'}
        format.json { render json: @visitor, status: :created, location: @visitor }
      else
        format.html { render action: 'new' }
        format.json { render json: @visitor.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def visitor_params
    params.require(:visitor).permit!
  end
end
