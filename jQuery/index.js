$(document).ready(function () {
    $('.input').change(function () {
        var input = $(this).val();
        $('ul').append('<li>' + input + '<span class="material-icons delete">backspace</span> </li>');
        $(this).val('');
    });
    $('ul').on('click','.delete',function(){
        $(this).parent('li').fadeOut(300);
    });
});

$(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  })
  
  function clockUpdate() {
    var date = new Date();
    $('.clock').css({'color': 'white'});
    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }
  
    function twelveHour(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }
  
    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
  
    $('.clock').text(h + ':' + m + ':' + s)
  }

  $(document).ready(function(){
    $('#color1').click(function(){
      $('body').removeClass();
      $('body').addClass('col1');
    });
    $('#color2').click(function(){
      $('body').removeClass();
      $('body').addClass('col2');
    });
    $('#color3').click(function(){
      $('body').removeClass();
      $('body').addClass('col3');
    });
    $('#color4').click(function(){
      $('body').removeClass();
      $('body').addClass('col4');
    });
    $('#color').click(function(){
      $('body').removeClass();
      $('body').toggleClass();
    });
  });