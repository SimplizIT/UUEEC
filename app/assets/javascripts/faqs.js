var faqpage = function(){

  $('.question-row').click(function(){
    $(this).next('.answer-row').toggle('slow');
  })
}

$(document).ready(faqpage);
$(document).on('page:load', faqpage);