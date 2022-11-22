



if($("#player_2email").hasClass("d-none")){
  $('.InputGroup input').on('change', function() {
    $('#player_2email').toggleClass("d-none");
});
}


let digitValidate = function(ele){
  // console.log(ele.value);
  ele.value = ele.value.replace(/[^0-9]/g,'');
}

let tabChange = function(val){
  let ele = document.querySelectorAll('input');
  if(ele[val-1].value != ''){
    ele[val].focus();
  }else if(ele[val-1].value == ''){
    ele[val-2].focus();
  }   
}

let digitValidate_player = function(elem){
  // console.log(elem.value);
  elem.value = elem.value.replace(/[^0-9]/g,'');
}

let tabChange_player = function(valu){
  let elem = document.getElementsByClassName('otp-field');
  
  if(elem[valu-1].value != ''){
    elem[valu].focus();
  }else if(elem[valu-1].value == ''){
    elem[valu-2].focus();
  }
  else{
    console.log('rrrr');
  }
}







// function countdown( elementName, minutes, seconds )
// {
//     var element, endTime, hours, mins, msLeft, time;

//     function twoDigits( n )
//     {
//         return (n <= 9 ? "0" + n : n);
//     }

//     function updateTimer()
//     {
//         msLeft = endTime - (+new Date);
//         if ( msLeft < 1000 ) {
//             element.innerHTML = "Time is up!";
//         } else {
//             time = new Date( msLeft );
//             hours = time.getUTCHours();
//             mins = time.getUTCMinutes();
//             element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
//             setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
//         }
//     }

//     element = document.getElementById( elementName );
//     endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
//     updateTimer();
// }

// countdown( "ten-countdown", 10, 0 );


var timeNow = {
  h: 0,
  m: 0,
  s: 0
};

var countInterval;

function startTimer() {
  // start the timer
  counting = true;
  // $('#stopBtn').prop("disabled", "");
  // $('#startBtn').prop("disabled", "true");
  // $('#resetBtn').prop("disabled", "true");
  countInterval = setInterval(count, 1000);
}

// function stopTimer() {
//   // stop the timer, but ask to confirm first
//   if (!(areYouSure())) { return; }
//   clearInterval(countInterval);
//   $('#startBtn').prop("disabled", "");
//   $('#stopBtn').prop("disabled", "true");
//   $('#resetBtn').prop("disabled", "");
// }

// function areYouSure() {
//   // let user confirm before stopping timer
//   var sure = confirm("Are you sure?");
//   return sure;
// }

function showTime() {
  // put h/m/s together for display
  var hr, min, sec;
  if (timeNow.h < 1) {
    hr = "";
  }
  else {
    hr = "" + timeNow.h + ":";
  }
  if (timeNow.m < 1) {
    min = "00:";
  }
  else {
    if (timeNow.m < 10) {
      min = "" + "0" + timeNow.m + ":";
    }
    else {
      min = timeNow.m + ":";
    }
  }
  if (timeNow.s < 10) {
    sec = "" + "0" + timeNow.s;
  }
  else {
    sec = timeNow.s;
  }
  $('#ten-countdown').html(hr + min + sec);
}

function count(){
  // increment the timer by 1s
  timeNow.s++;
  if (timeNow.s > 59) {
    timeNow.m++;
    timeNow.s = 0;
  }
  if (timeNow.m > 59) {
    timeNow.h++;
    timeNow.m = 0;
  }
  showTime();
}

function resetTimer() {
  // reset timer back to 0 after confirming
  if (!(areYouSure())) { return; }
  timeNow.h = 0;
  timeNow.m = 0;
  timeNow.s = 0;
  $('#resetBtn').prop("disabled", "true");
  showTime();
}

$(document).ready(function() {
  // showTime();
  // startTimer();
  // $('#startBtn').click(function() { startTimer(); });
  // $('#stopBtn').click(function() { stopTimer(); });
  // $('#resetBtn').click(function() { resetTimer(); });
  // $('#stopBtn').prop("disabled", "true");
  // $('#resetBtn').prop("disabled", "true");
});

// add days?
