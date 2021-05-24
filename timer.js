var time = 0;
var starFlag = true;

var nowth;
var nowtm;
var nowts;



$(document).ready(function () {
  buttonEvt();
});

function showPopup() {
  var popupWidth = 300;
  var popupHeight = 300;
  var popX = (window.screen.width / 2) - (popupWidth / 2);
  var popY = (window.screen.height / 2) - (popupHeight / 2);
  window.open("timer_pop.html", "timer_pop", 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popX + ', top=' + popY);
}

function init() {
  document.getElementById("time").innerHTML = "00:00:00";
}

function buttonEvt() {
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;

  // start btn
  $("#startbtn").click(function () {

    if (starFlag) {
      $(".fa").css("color", "#FAED7D")
      this.style.color = "#4C4C4C";
      starFlag = false;

      if (time == 0) {
        init();
      }

      timer = setInterval(function () {
        time++;

        min = Math.floor(time / 60);
        hour = Math.floor(min / 60);
        sec = time % 60;
        min = min % 60;

        var th = hour;
        var tm = min;
        var ts = sec;
        if (th < 10) {
          th = "0" + hour;
        }
        if (tm < 10) {
          tm = "0" + min;
        }
        if (ts < 10) {
          ts = "0" + sec;
        }
        document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
      }, 1000);
    }
  });
  $("#startbtn").hover(function () {
    $(this).css("color", "white");
  }, function () {
    $(".fa").css("color", "#FAED7D")
  });

  // pause btn
  $("#pausebtn").click(function () {
    if (time != 0) {
      $(".fa").css("color", "#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;
    }
  });

  $("#pausebtn").hover(function () {
    $(this).css("color", "white");
  }, function () {
    $(".fa").css("color", "#FAED7D")
  });

  // stop btn
  $("#stopbtn").click(function () {
    if (time != 0) {
      $(".fa").css("color", "#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;
      time = 0;
      init();
      document.getElementById("alltime").innerHTML = th + ":" + tm + ":" + ts;
    }
  });

  // stop btn
  $("#pen").click(function () {
    clearInterval(timer);
    starFlag = true;
    var li = document.createElement('li')
    li.style.color = "#fff"
    li.innerText = hour + ' : ' + min + ' : ' + sec
    nowth = hour
    nowtm = min
    nowts = sec
    showPopup();
  });

  $("#stopbtn").hover(function () {
    $(this).css("color", "white");
  }, function () {
    $(".fa").css("color", "#FAED7D")
  });

  $("#pen").hover(function () {
    $(this).css("color", "white");
  }, function () {
    $(".fa").css("color", "#FAED7D")
  });

}
