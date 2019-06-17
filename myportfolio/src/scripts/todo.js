$(function() {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  
  });
  $(document).ready(function() {
    var count = 0;
    let square =$('#box');
    $(square).click(function() {
      if(count < 100000) {
        count++;
        $(this).text("clicks" + " " + count);    //I am still very confused by javascript and I will look more into it over the break//
     };
   
    })

});