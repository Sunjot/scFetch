$(document).ready(function() {

  $('#fetchbutton').click(function() {

    SC.initialize({
      client_id: '48ec7e54aac7c754844d5fe06901aa0b'
    });

    $.ajax({
      type:     "GET",
      url:      $('#linktext').val(), // <-- Here
      dataType: "html",
      success: function(data){
          console.log(data);
      }
    });

  });

});
