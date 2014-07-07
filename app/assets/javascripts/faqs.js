var faqpage = function(){

  $('.question-row').click(function(){
     $(this).next('.answer-row').toggle('slow');
  })

  $('.tab-pane.active').tab('show')

  $('.tabbed a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
}

$(document).ready(faqpage);
$(document).on('page:load', faqpage);