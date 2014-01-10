class EventsController < ApplicationController
  load_and_authorize_resource
  def index
    @events = Event.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @events }
    end
  end 

  def new
    @event = Event.new
  end

  def create
    current_user.events.create(event_params)
    redirect_to events_path
  end

  def destroy
   event = Event.find(params[:id])
    if event.user.id == current_user.id
      event.delete
    else
      flash[:error] = 'Access is denied for this action.'
      redirect_to events_path
    end
  end

  private

  def event_params
    params.require(:event).permit!
  end
end
