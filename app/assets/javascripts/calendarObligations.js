var obligationCalendar = function(){

  return $('#calendarObligations').fullCalendar({
    editable: true,
    aspectRatio: 1.2,
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

    // dayClick: function(date, allDay, jsEvent, view){
    //   if(view.name == 'month'){
    //     $('#calendarObligations').fullCalendar('gotoDate', date);
    //     view.calendar.changeView('agendaWeek');
    //   }
    // },

    eventClick: function(calEvent, jsEvent, view){
      if(calEvent){
        $('#ObligationModal').find('#obligationbody').html(displayObligationHTML(calEvent))
        $('#ObligationModal').modal('show')
      }
    
      $('.button_closeObligation').on('click', function(){
        $('#ObligationModal').modal('hide')
      });

      $('.button_deleteObligation').on('click', function(e){
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
  $('#createobligation').on('click', function(){
    $('#createobligationmodal').modal('show')
  });



 $('.button_closeObligation').on('click', function(){
    $('#createobligationmodal').modal('hide')
  });
}

var setEndDate = function(){
  $('#obligation_start').change(function(){
    console.log('here i am')
    $('#obligation_end').val($('#obligation_start').val());
  });
}

displayObligationHTML = function(calEvent){
  if(calEvent.start){
    var startTime = calEvent.start.toLocaleTimeString().replace(/:\d+ /, ' ');
    var startDate = calEvent.start.toLocaleDateString();
  }else{
   var startTime = "No Time Given" 
   var startDate = "No Date Given" 
  }
  if(calEvent.end){
    var endTime = calEvent.end.toLocaleTimeString().replace(/:\d+ /, ' ');
    var endDate = calEvent.end.toLocaleDateString();
  }else{
   var endTime = "No Time Given"
   var endDate = "No Date Given" 
  }
  if(calEvent.allDay == true){
    return ('<b>Title: </b>' + calEvent.title.capitalizeName() + '<br>' + '<b>Time: </b>' + 'All Day Event<br>' + '<b>Description: </b>' + calEvent.description);
    
  }else{
    return ('<b>Title: </b>' + calEvent.title.capitalizeName() + '<br>' + '<b>Start Date: </b>' + startDate + '<br>' + '<b>Start Time: </b>' + startTime + '<br>' + '<hr>' + '<b>End Date: </b>' + endDate + '<br>' + '<b>End Time: </b>' + endTime + '<br>' + '<b>Description: </b>' + calEvent.description);
  }
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
$(document).ready(setEndDate);
$(document).on('page:load', setEndDate);



