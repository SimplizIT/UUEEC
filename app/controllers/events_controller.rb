class EventsController < ApplicationController
  load_and_authorize_resource
  def index
    @events = Event.all
    currentEvents = Event.all.where('start > ?', DateTime.now)
    @nextEvent = currentEvents.sort! { |a,b| a.start <=> b.start }.first
    imagenames = Dir.glob('app/assets/images/*.{png,jpg}')
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
    current_user.events.create(event_params)
    redirect_to events_path
  end

  def destroy
   event = Event.find(params[:id])
    if can? :delete
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
