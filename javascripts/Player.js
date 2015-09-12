$(function(){
  $(document).keypress(function(e) {
    var key = String.fromCharCode(e.keyCode);

    if (key == '1') {
      $('.player').css('left', '25%');
    } else if (key == '2') {
      $('.player').css('left', '50%');
    } else {
      $('.player').css('left', '75%');
    }
  });
});