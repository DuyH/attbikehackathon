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

  var resetBody = function() {
    $('.bodyImg').attr('src', 'images/neutral.png');
    console.log("resetting body");
  }

  $(document).keypress(function(e) {
    var key = String.fromCharCode(e.keyCode);

    if (key != '1' && key != '2' && key != '3') {
      return;
    }

    if (key == '1') {
      $('.player').css('left', '25%');
      $('.bodyImg').attr('src', 'images/left.png');
    } else if (key == '2') {
      $('.player').css('left', '50%');
      $('.bodyImg').attr('src', 'images/stop.png');
    } else if (key == '3') {
      $('.player').css('left', '75%');
      $('.bodyImg').attr('src', 'images/right.png');
    }
    setTimeout(resetBody, 500);
  });

});