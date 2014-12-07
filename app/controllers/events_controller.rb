class EventsController < ApplicationController
  load_and_authorize_resource
  def index
    @events = Event.all
    @event = Event.new
    currentEvents = Event.all.where('start > ?', DateTime.now)
    # Just for now.
    # @nextEvent = currentEvents.sort! { |a,b| a.start <=> b.start }.first
    imagenames = Dir.glob('app/assets/images/*.{png,jpg,JPG,JPEG,jpeg,PNG}')
    images = []
    imagenames.each do |image|
      images.push(image.split('/').last)
    end
    @divimages = images.sample(3)
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @events }
    end
  end

  def new
    @event = Event.new
  end

  def create
    if current_user
      if validate_dates( params )
        event = current_user.events.new(event_params)
        event_saved = increment_end_date(event).save
        if event_saved
          flash[:notice] = 'Event Created'
          redirect_to events_path
        else
          flash[:error] = 'Event could not be created'
          redirect_to events_path
        end
      else
        flash[:error] = 'Start and End time must be present and incremental'
        redirect_to events_path
      end
    else
      flash[:error] = 'You must be signed in'
      redirect_to events_path
    end
  end

  def destroy
    event = Event.find(params[:id])
    if can? :delete, Event
      event.delete
      render nothing: true
    else
      flash[:error] = 'Access is denied for this action.'
      redirect_to events_path
    end
  end

  private

  def validate_dates( params )
    if params['event']['start'].length > 0 && params['event']['end'].length > 0
      if params['event']['start'] <= params['event']['end']
        return true
      else
        return false
      end
    else
      return false
    end
  end

  def increment_end_date(event)
    if event.start == event.end
      event.end = event.end + 1.minutes
    end
    event
  end

  def event_params
    params.require(:event).permit!
  end
end
