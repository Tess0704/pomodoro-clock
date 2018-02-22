

function incre(obj) {
  if(timer_is_on == 0) {
     var num = $(obj)
    .prev()
    .text();
  num++;
  $(obj)
    .prev()
    .text(num);
  $("#indicator").text(num);
   total = $("#indicator").text()*60;
   unit =  100/total;
  }
 
}

function decre(obj) {
  if(timer_is_on == 0) {
      var num = $(obj)
    .next()
    .text();
  if (num > 1) {
    num--;
    $(obj)
      .next()
      .text(num);
    $("#indicator").text(num);
     total = $("#indicator").text()*60;
     unit =  100/total;
    }
  }

}

var status = 1;
var total;
total = $("#slen").text()*60;
var unit =  100/total;
var height = 0;




var timer_is_on = 0;
var t;
function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    downCount();
  }
  else{
    clearTimeout(t);
    timer_is_on = 0;
  }
}

function downCount() {
  total--;
  var min =
    parseInt(total / 60) < 10
      ? "0" + parseInt(total / 60)
      : parseInt(total / 60);
  
  var sec = total % 60 < 10 ? "0" + total % 60 : total % 60;
 $("#indicator").text(min + ":" + sec);
 
  height += unit;
  
$(".fill").css("height", height+"%");
  
  if(total == 0){
    if(status == 1)  {
      status = 0;
      $("#status").text("Break!");
      
      total = $('#blen').text()*60;
      unit =  100/total;
      height = 0;
      $(".fill").css("background-color", "#ff4444");
     $(".fill").css("height", height+"%");
    }
    else
      {
        status = 1;
        $("#status").text("Session");
        total = $('#slen').text()*60;
        unit = 100/total;
        height = 0;
        $(".fill").css("background-color", "#99CC00");
        $(".fill").css("height", height+"%");
      }
  }
  
  t = setTimeout(function() {
    downCount();
  }, 1000);
}