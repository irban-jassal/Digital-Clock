
const Hours = document.getElementById("Hours") ;
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");
const Timeera = document.getElementById("Timeera");
const Day = document.getElementById("day");
const Month = document.getElementById("Month");
const year = document.getElementById("year");
var today = document.getElementById('day_year');
function currentTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let TE = "AM"
    let t = new Date().toDateString();
 

    if(h >12){
        h = h-12;
        TE = "PM"
    }
    h < 10 ? h = "0" +h : h; 
    m < 10 ? m = "0" +m : m; 
    s < 10 ? s = "0" +s : s; 

    Hours.innerText = h;
    Minutes.innerText = m;
    Seconds.innerText = s;
   Timeera.innerText = TE;
   today.innerHTML = t;

    if(h >12){
        h = h-12;
        TE = PM
    }
    setTimeout(function(){
        currentTime();
    },1000);

}
currentTime();