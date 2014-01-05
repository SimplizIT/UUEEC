var eventCalendar = function(){
var updateEvent;


  return $('#calendarMain').fullCalendar({
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

    dayClick: function(date, allDay, jsEvent, view){
      if(view.name == 'month'){
        $('#calendar').fullCalendar('gotoDate', date);
        view.calendar.changeView('agendaWeek');
      }
    },

    eventClick: function(calEvent, jsEvent, view){
      if(calEvent){
        var htmlview = displayEventHTML(calEvent)
        console.log(calEvent.start.toLocaleDateString())
        $('#EventModal').find('#orderDetails').html(displayEventHTML(calEvent))

        $('#EventModal').modal('show')
        console.log(calEvent)


      }
    
      $('.button_close').on('click', function(){
        $('#EventModal').modal('hide')
      });
    }
  });
    // page is now ready, initialize the calendar...

    // $('#calendar').fullCalendar({
    //   header: { left: 'prev, next, today', center: 'title', right: 'month, agendaWeek, agendaDay', defaultView: 'month' },
    //   events: '/events',
    // dayRender: function(daysOfWeek, cell)
    // {
    //     if(reqDate.getDate()==daysOfWeek.getDate())
    //     {
    //         $(cell).addClass('fc-state-highlight');
    //     }
    //     else
    //     {
    //         $(cell).removeClass('fc-state-highlight');
    //     }
    // }
      // dayClick: function(date, allDay, jsEvent, view){
      //    // $('#calendar td').removeClass('fc-state-highlight');
      //   //   $(this).addClass('fc-state-highlight'); 
      //   //     var column = ['fc-sun', 'fc-mon', 'fc-tue', 'fc-wed', 'fc-thu', 'fc-fri', 'fc-sat']
      //   // selectedColumnName = null
      //   // selectedColumnNumber = 0
      //   // for(var i = 0; i < column.length; i++){
      //   //   // console.log(column[i])
      //   //   if($(this).hasClass(column[i])){
      //   //     selectedColumnName = column[i]
      //   //     selectedColumnNumber = i
      //   //   }
      //   // }
      //     // console.log($(this))
      //   $('#calendar').fullCalendar('gotoDate', date);
      //   view.calendar.changeView('agendaWeek')
      //   // $('.' + selectedColumnName).addClass('fc-state-highlight')
      // }
       // dayClick: function(date, allDay, jsEvent, view) {
       //  var column = ['fc-sun', 'fc-mon', 'fc-tue', 'fc-wed', 'fc-thu', 'fc-fri', 'fc-sat']
       //  selectedColumnName = null
       //  selectedColumnNumber = 0
       //  for(var i = 0; i < column.length; i++){
       //    // console.log(column[i])
       //    if($(this).hasClass(column[i])){
       //      selectedColumnName = column[i]
       //      selectedColumnNumber = i
       //    }
       //  }

        // console.log(selectedColumnName)
        // console.log(selectedColumnNumber)
        // console.log($(this))
        // console.log($(this).hasClass('fc-wed'))
        // console.log(date),
        // console.log(allDay),
        // console.log(jsEvent),
        // console.log(view)
       //  if (allDay) {
       //    $('#calendar td').removeClass('fc-state-highlight');
       //    // $('#calendar td').removeClass('fc-today');

       //    $(this).addClass('fc-state-highlight'); 
       //    $('#calendar').fullCalendar('gotoDate', date.getFullYear(), date.getMonth(), date.getDate()); 
       //  }


       // },

 // viewRender: function(view, element){
 //        // console.log(element)
 //        if(view.name == 'agendaWeek'){
 //          // console.log(element)
 //        }
 //      },

 //      eventClick: function(event, jsEvent, view) {
 //        console.log(jsEvent)
 //      }

 //        // put your options and callbacks here
 //    })
 //        // if($('#calendar').fullCalendar('getView').name == 'agendaWeek'){


 //    $('.fc-button').click(function() {
 //          // console.log($('.fc-state-highlight'))
 //          var hello = $('#calendar').find('.fc-state-highlight')
 //          console.log(hello)
 //          var column = ['fc-sun', 'fc-mon', 'fc-tue', 'fc-wed', 'fc-thu', 'fc-fri', 'fc-sat']
 //        selectedColumnName = null
 //        selectedColumnNumber = null
 //        for(var i = 0; i < column.length; i++){
 //          // console.log(column[i])
 //          if($(hello).hasClass(column[i])){
 //            selectedColumnName = column[i]
 //            selectedColumnNumber = i
 //          }
 //        }
 //        console.log(selectedColumnNumber)
 //          // console.log($('#calendar').fullCalendar('getView'))
 //          // $('#calendar').fullCalendar('getView').allDayRow().addClass('fc-state-highlight');
         
        // })


    // $('#calendar').fullCalendar('changeView', 'agendaWeek')
}


// function getViewDate(view, column){
//     if(view.name == 'agendaWeek'){
//       $('#calendar td').removeClass('fc-state-highlight');
//       $('#calendar td.' + column).addClass('fc-state-highlight')                 
//     }
  
// }

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

updateEvent = function(the_event) {
  return $.update("/events/" + the_event.id, {
    event: {
      title: the_event.title,
      starts_at: "" + the_event.start,
      ends_at: "" + the_event.end,
      description: the_event.description
    }
  });
};

$(document).ready(eventCalendar);
$(document).on('page:load', eventCalendar);





