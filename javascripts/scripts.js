//selector
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");



var minute = 1;
if(minute < 10) {
    minute = "0" + minute;
}
var second = 60;
if(second < 10) {
    second = "0" + second;
}
//hours / 1hr = 60 min
var hour = 23;
if(hour < 10) {
    hour = "0" + hour;
}
// day = 24 hours
var day = 8;
if(day < 10) {
    day = "0" + day;
}


var countDown = setInterval(function () {
    'use strict';
    downTimer();
}, 1000)


function downTimer() {
    'use strict';
    seconds.firstElementChild.textContent = second;
    minutes.firstElementChild.textContent = minute;
    hours.firstElementChild.textContent = hour;
    days.firstElementChild.textContent = day;
    if(second > 0) {
        second = second - 1;
        if(second < 10) {
            second = "0" + second;
        }
        if(second == 0 && minute != 0) {
            minute = minute - 1;
            clearInterval();
            second = 60;
            clearInterval(); 
            if(minute < 10) {
                minute = "0" + minute;
            }
        } else if (hour > 0 && minute == 0 && second == 0) {
            hour = hour - 1;
            clearInterval();
            minute = 60;
            second = 60;
            if(hour < 10) {
                hour = "0" + hour;
            }
        }else if(day > 0 && hour == 0 && minute == 0 && second == 0) {
            day = day - 1;
            clearInterval();
            second = 60;
            minute = 60;
            hour = 24;
            if(day < 10) {
                day = "0" + day;
            }
        }else if (day == 0 && hour == 0 && minute == 0 && second == 0) {
            day = 0;
            hour = 0;
            minute = 0;
            second = 0;
            clearInterval();
        }
    }
}