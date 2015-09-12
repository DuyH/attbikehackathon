$(function(){

  var currentPedal = 0
  var changePedal = function() {
    if (currentPedal == 0) {
      currentPedal = 1;
      $('.pedalImg').attr('src', 'images/pedal_2.png');
    } else {
      currentPedal = 0;
      $('.pedalImg').attr('src', 'images/pedal_1.png');
    }
  }
  window.setInterval(function(){
    changePedal();
  }, 200);

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