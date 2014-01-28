class EventsController < ApplicationController
  load_and_authorize_resource
  def index
    @events = Event.all
    currentEvents = Event.all.where('start > ?', DateTime.now)
    @nextEvent = currentEvents.sort! { |a,b| a.start <=> b.start }.first
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
    eventobject = current_user.events.new(event_params)
    increment_end_date(eventobject).save
    redirect_to events_path
  end

  def destroy
   event = Event.find(params[:id])
    if can? :delete, Event
      event.delete
    else
      flash[:error] = 'Access is denied for this action.'
      redirect_to events_path
    end
  end

  private

  def increment_end_date(eventobject)
    if eventobject.start == eventobject.end
      eventobject.end = eventobject.end + 1.minutes
    end
    eventobject
  end

  def event_params
    params.require(:event).permit!
  end
end
