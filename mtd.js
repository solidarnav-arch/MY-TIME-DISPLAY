function ShowTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session ="AM";

if(h > 12){
h =  h - 12;
session = "PM"
}

h = (h < 10) ? "0" + h : h;
m = (h < 10) ? "0" + m : m;
s = (h < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("MyClockDisplay").innerText = time;
setTimeout(ShowTime, 1000);
}

ShowTime();
