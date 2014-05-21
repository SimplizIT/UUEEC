var datePicker = function(){

  var d = new Date();
  var datepickerdate = new Date();
  var month = d.getMonth();
  var day = d.getDate();
  var year = d.getFullYear();
  var currentStartDate = new Date(year, month, day, 08, 00);
  var currentEndDate = d.setDate(new Date(year, month, day, 12, 00));


  // var currentStartDate = new Date(08, 00);
  $('#obligationStart').datetimepicker({
    useSeconds: false,
    minuteStepping: 15,
    minDate: moment(),
    defaultDate: moment(8, 'HH').add('days', 1),
    icons: {
      time: 'fa fa-clock-o',
      date: "fa fa-calendar",
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down"
    }
  });

  $('#obligationEnd').datetimepicker({
    useSeconds: false,
    minuteStepping: 15,
    minDate: moment(),
    defaultDate: moment(12, 'HH').add('days', 1),
    icons: {
      time: 'fa fa-clock-o',
      date: "fa fa-calendar",
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down"
    }
  });

  $('#obligationDate').datetimepicker({
    useSeconds: false,
    minuteStepping: 15,
    minDate: moment(),
    defaultDate: moment().add('days', 1)
  })

  // setDate(currentDate.getDate() - 1)
  $("#obligationStart").on("dp.change",function (e) {
     $('#obligationEnd').data("DateTimePicker").setMinDate(moment(e.date).subtract('days', 1));
     $('#obligationEnd').data('DateTimePicker').setDate(moment(e.date).hour(12));
     $('#obligationDate').data('DateTimePicker').setDate(moment(e.date));
  });
  $("#obligationEnd").on("dp.change",function (e) {
     // $('#obligationStart').data("DateTimePicker").setMaxDate(e.date);
  });


  $('.child_birthdate').datetimepicker({
    format: "dd MM yyyy",
    startView: 4,
    minView: 2,
    autoclose: true,
    todayHighlight: false
  });

  $('.spouse_birthdate').datetimepicker({
    format: "dd MM yyyy",
    startView: 4,
    minView: 2,
    autoclose: true,
    todayHighlight: false
  });

  $('.adult_birthdate').datetimepicker({
    format: "dd MM yyyy",
    startView: 4,
    minView: 2,
    autoclose: true,
    todayHighlight: false
  })
  // console.log(datepickerdate)
  // console.log(datepickerdate.setMonth(datepickerdate.getMonth() -- 60))
  
  // $('.datetimepickerevent').datetimepicker({
  //   language: 'en',
  //   pick12HourFormat: true,
  //   pickSeconds: false,
  // });

  // $('.datetimepickerobligation').datetimepicker({
  //   language: 'en',
  //   pick12HourFormat: true,
  //   pickSeconds: false,
  // });

  // if($('.datetimepickerobligation').length > 0){
  //   var d = new Date();
  //   var month = d.getMonth();
  //   var day = d.getDate();
  //   var year = d.getFullYear();
  //   $(".datetimepickerobligation.obligationStart").data('datetimepicker').setLocalDate(new Date(year, month, day, 08, 00));
  //   $(".datetimepickerobligation.obligationEnd").data('datetimepicker').setLocalDate(new Date(year, month, day, 12, 00));
  // }

  //  $('.datetimepickerobligation').on('dp.change', function(e){
  //   console.log(e)
  //  })

  //   $('.datetimepickerevent').on('dp.change', function(e){
  //   console.log(e)
  //  })

  //                   $('#obligation_start').datetimepicker();
  //                   $('#datetimepickerend').datetimepicker();
  //                   $('#obligation_start').on('dp.change', function(e){
  //                     console.log(e)
  //                     console.log(e.date)
  //                     $('#datetimepickerend').data('DateTimePicker').setDate(e.date);
  //                   })


  
     // $('.datetimepickerobligation').datetimepicker({onSelect: function(selectedDate) {
     //  console.log(selectedDate)
     //        var date = $(this).datetimepicker('getDate');
     //        date.setDate(date.getDate());
     //        $('#obligation_end').datetimepicker('setDate', date); // Set as default

     //  }});

}




$(document).ready(datePicker);
$(document).on('page:load', datePicker);