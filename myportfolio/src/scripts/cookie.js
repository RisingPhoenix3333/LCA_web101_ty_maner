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