class EventsController < ApplicationController

  def index
    @events = Event.all
    # @events = Event.between(params['start'], params['end']) if (params['start'] && params['end'])

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

  private

  def event_params
    params.require(:event).permit!
  end

end
