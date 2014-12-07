var obligationCalendar = function(){

  return $('#calendarObligations').fullCalendar({
    editable: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'month',
    height: 1000,
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

    // dayClick: function(date, allDay, jsEvent, view){
    //   if(view.name == 'month'){
    //     $('#calendarObligations').fullCalendar('gotoDate', date);
    //     view.calendar.changeView('agendaWeek');
    //   }
    // },

    eventClick: function(calEvent, jsEvent, view){
      if(calEvent){
        var start = calEvent.start;
        var end = calEvent.end || start;
        $('#ObligationModal').find('#obligationbody').html(displayObligationHTML(calEvent))
        $('#ObligationModal').modal('show')
      }

      $('.button_closeObligation').on('click', function(){
        $('#ObligationModal').modal('hide')
      });

      $('.obligationDelete').on('click', function(e){
        e.preventDefault();
        $.ajax({
          url: 'obligations/' + calEvent.id,
          type: 'DELETE',
          success: function() {
            $('#ObligationModal').modal('hide')
            $('#calendarObligations').fullCalendar('removeEvents', [calEvent.id]);
          }
        })
      });
    }
  });


}

var createobligation = function(){
  $('.btn-modal-open').on('click', function(link){
    console.log('open modal')
    link.preventDefault();
    $(this.getAttribute('href')).modal('show');
  })


 $('.btn-modal-close').on('click', function(link){
  console.log('close modal')
    link.preventDefault();
    $(this.getAttribute('href') + ' form').find("input,textarea").val('');
    $(this.getAttribute('href')).modal('hide');
  });
}



displayObligationHTML = function(calEvent){
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
    return ('<i id="obligationModalIcon" class="fa fa-user"> - </i><span> ' + capitalizeWords(calEvent.title) + '</span><br><br>' + '<p><strong>Start: </strong> <em>' + writeDay(startDate.getDay()) + ', ' + writeMonth(startDate.getMonth()) + ' ' + addEndToDate(startDate.getDate()) + '</em> @ <em>' + startTime + '</em><p><strong>End: </strong> <em> ' + writeDay(endDate.getDay()) + ', ' + writeMonth(endDate.getMonth()) + ' ' + addEndToDate(endDate.getDate()) + '</em> @ <em>' + endTime + '</p><div class="horzscrollone"></div><hr>' + 'Notes ~' + calEvent.description)
  }
  // if(calEvent.start){
  //   var startTime = calEvent.start.toLocaleTimeString().replace(/:\d+ /, ' ');
  //   var startDate = calEvent.start.toLocaleDateString();
  // }else{
  //  var startTime = "No Time Given"
  //  var startDate = "No Date Given"
  // }
  // if(calEvent.end){
  //   var endTime = calEvent.end.toLocaleTimeString().replace(/:\d+ /, ' ');
  //   var endDate = calEvent.end.toLocaleDateString();
  // }else{
  //  var endTime = "No Time Given"
  //  var endDate = "No Date Given"
  // }
  // if(calEvent.allDay == true){
  //   return ('<b>Title: </b>' + calEvent.title.capitalizeName() + '<br>' + '<b>Time: </b>' + 'All Day Event<br>' + '<b>Description: </b>' + calEvent.description);

  // }else{
  //   return ('<b>Title: </b>' + calEvent.user_id + '<br>' + '<b>Start Date: </b>' + startDate + '<br>' + '<b>Start Time: </b>' + startTime + '<br>' + '<hr>' + '<b>End Date: </b>' + endDate + '<br>' + '<b>End Time: </b>' + endTime + '<br>' + '<b>Description: </b>' + calEvent.description);
  // }
}

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

String.prototype.capitalizeName = function() {
  var strings = this.split(/[ _]+/)
  for(var i=0; i < strings.length; i++){
    var j = strings[i].charAt(0).toUpperCase();
    strings[i] = j + strings[i].substr(1);
  }
  return strings.join(" ");
}

$(document).ready(obligationCalendar);
$(document).on('page:load', obligationCalendar);
$(document).ready(createobligation);
$(document).on('page:load', createobligation);
// $(document).ready(setEndDate);
// $(document).on('page:load', setEndDate);
