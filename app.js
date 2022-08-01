'use strict';

let clock = document.querySelector('.clock');

let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let monthsName = [
     "January", 
     "February", 
     "March",
      "April", 
     "May", 
     "June", 
     "July", 
     "August", 
     "September", 
     "October", 
     "November",
      "December"
];
console.log(day[2]);

function time() {
    let date = new Date();

    let hours = date.getHours();
    let min   = date.getMinutes();
    let sec   = date.getSeconds();
    let dayName = date.getDay();
    let months = date.getMonth();
    let dayNo = date.getDate();
    let year = date.getFullYear();

    if(hours > 12) hours -= 12;
    if(hours < 10) hours  = `0${hours}`;
    if(min < 10 ) min = `0${min}`;
    if(sec < 10 ) sec = `0${sec}`;

    let details = `${day[dayName]},${monthsName[months]},${dayNo},${year}`;
    clock.innerHTML = `${hours}:${min}:${sec}<br/> <span>${details}</span>`;

}

setInterval(time,1000);
