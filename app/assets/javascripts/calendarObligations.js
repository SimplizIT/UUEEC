var obligationCalendar = function(){

  return $('#calendarObligations').fullCalendar({
    editable: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'month',
    height: 500,
    slotMinutes: 30,
    eventSources: [
      {
        url: '/obligations'
      }
    ],
    timeFormat: 'h:mm t{ - h:mm t} ',
    dragOpacity: "0.5",
    eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc) {
      return updateEvent(event);
    },
    eventResize: function(event, dayDelta, minuteDelta, revertFunc) {
      return updateEvent(event);
    },

    dayClick: function(date, allDay, jsEvent, view){
      if(view.name == 'month'){
        $('#calendarObligations').fullCalendar('gotoDate', date);
        view.calendar.changeView('agendaWeek');
      }
    },

    eventClick: function(calEvent, jsEvent, view){
      if(calEvent){
        $('#ObligationModal').find('#obligationbody').html(displayEventHTML(calEvent))
        $('#ObligationModal').modal('show')
      }
    
      $('.button_close').on('click', function(){
        $('#ObligationModal').modal('hide')
      });
    }
  }); 
}

displayEventHTML = function(calEvent){
  if(calEvent.start){
    var startTime = calEvent.start.toLocaleTimeString().replace(/:\d+ /, ' ')
    var startDate = calEvent.start.toLocaleDateString()
  }else{
   var startTime = "No Time Given" 
  }
  if(calEvent.end){
    var endTime = calEvent.end.toLocaleTimeString().replace(/:\d+ /, ' ')
    var endDate = calEvent.end.toLocaleDateString()
  }else{
   var endTime = "No Time Given" 
  }
  if(calEvent.allDay == true){
    return ('<b>Title: </b>' + calEvent.title + '<br>' + '<b>Time: </b>' + 'All Day Event<br>' + '<b>Description: </b>' + calEvent.description)
    
  }else{
    return ('<b>Title: </b>' + calEvent.title + '<br>' + '<b>Start Date: </b>' + startDate + '<br>' + '<b>Start Time: </b>' + startTime + '<br>' + '<hr>' + '<b>End Date: </b>' + endDate + '<br>' + '<b>End Time: </b>' + endTime + '<br>' + '<b>Description: </b>' + calEvent.description)
    
  }

}

$(document).ready(obligationCalendar);
$(document).on('page:load', obligationCalendar);





