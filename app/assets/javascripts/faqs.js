var faqpage = function(){

  $('.question-row').click(function(){
    $(this).next('.answer-row').toggle('slow');
  })

   $('.tabbed a').click(function (e) {
   e.preventDefault()
   console.log($(this))
   $(this).tab('show')
})
}

$(document).ready(faqpage);
$(document).on('page:load', faqpage);