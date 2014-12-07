var eventCalendar = function(){
var updateEvent;


  return $('#calendarEvents').fullCalendar({
    editable: true,
    header: {
      left: '',
      center: 'title',
      right: 'prev, next today'
    },
    defaultView: 'month',
    height: 1000,
    slotMinutes: 30,
    eventSources: [
      {
        url: '/events'
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

    // dayClick: function(date, allDay, jsEvent, view){
    //   if(view.name == 'month'){
    //     $('#calendarEvents').fullCalendar('gotoDate', date);
    //     view.calendar.changeView('agendaWeek');
    //   }
    // },

    eventClick: function(calEvent, jsEvent, view){
      if(calEvent){
        var start = calEvent.start;
        var end = calEvent.end || start;
        $('#EventModal').find('#eventbody').html(displayEventHTML(calEvent))
        $('#EventModal').modal('show')
      }

      $('.button_closeEvent').on('click', function(){
        $('#EventModal').modal('hide')
      });
      $('.eventDelete').on('click', function(e){
        e.preventDefault();
        $.ajax({
          url: 'events/' + calEvent.id,
          type: 'DELETE',
          success: function() {
            $('#EventModal').modal('hide')
            $('#calendarEvents').fullCalendar('removeEvents', [calEvent.id]);
          }
        })
      });
    }
  });
}


displayEventHTML = function(calEvent){
  // if($('#hiddenUserEvents')){
  //   var userDelete = eventDeleteHTML(calEvent.user_id, $('#hiddenUserEvents').text());
  // }else{
  //   var userDelete = ''
  // }
  console.log(calEvent)

  if(calEvent.start){
    var startTime = calEvent.start.toLocaleTimeString().replace(/:\d+ /, ' ')
    var startDate = calEvent.start
  }else{
   var startTime = "No Time Given"
   var startDate = "No start Date Given"
  }
  if(calEvent.end){
    var endTime = calEvent.end.toLocaleTimeString().replace(/:\d+ /, ' ')
    var endDate = calEvent.end
  }else{
   var endTime = "No Time Given"
   var endDate = "No end Date Given"
  }
  if(calEvent.allDay == true){
    return ('<div class="modaldivcolor"><b>Title: </b>' + capitalizeWords(calEvent.title) + '<br>' + '<p>This is an all day event</p>' + '<b>Description: </b>' + calEvent.description)

  }else{
    return ('<i id="modaltitleicon" class="fa fa-pagelines"></i><div class="eventtitle">' + capitalizeWords(calEvent.title) + '</div><br>' + '<p>Please join us on <em>' + writeDay(startDate.getDay()) + ', ' + writeMonth(startDate.getMonth()) + ' ' + addEndToDate(startDate.getDate()) + '</em><br>starting at <em>' + startTime + '</em><hr><p>Our event will end on ' + writeDay(endDate.getDay()) + ', ' + writeMonth(endDate.getMonth()) + ' ' + addEndToDate(endDate.getDate()) + ' ending at ' + endTime + '</p><div class="horzscrollone"></div>' + 'Notes ~' + calEvent.description)
  }
}

// eventDeleteHTML = function(event_userID, current_userID){
//   if(current_userID == event_userID){
//     return ('<hr><p>Delete this event from the calendar?</p><button class="button_deleteEvent btn btn-danger btn-sm">Delete</button>')
//   }else{
//     return ('')
//   }
// }

function writeDay(day){
  var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  return weekday[day];
}

function writeMonth(month){
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  return months[month];
}

function addEndToDate(date){
  var ends = new Array('th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th');
  return date.toString().concat(ends[(date % 10)]);
}

function capitalizeWords(str) {
  var pieces = str.split(" ");
  for ( var i = 0; i < pieces.length; i++ ){
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1);
  }
  return pieces.join(" ");
}


$(document).ready(eventCalendar);
$(document).on('page:load', eventCalendar);
