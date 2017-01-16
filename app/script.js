/* global $ */
$(document).ready(function(){
    //scrptE.setAttribute("src", "language_it.js?" + (Date.now() % 10000));
    $.ajax({
      url: 'https://randomuser.me/api/?results=5',
      dataType: 'json',
      success: function(data) {
        var results = data.results;
        //console.log(data.results);
        
        $.each(results, function(){
          var firstName, lastName;
          $.each(this, function(name,value){
            var firstName = results[this].name.first;
            var lastName = results[this].name.last;
            console.log(name + '=' + value);
          })
           $("#divTest2").append(" "+firstName+" "+lastName);
        });
        
       
      }
    });
});
            