"use strict";
let clock = document.querySelector(".clock");

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
  "December",
];

let dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function run() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let months = date.getMonth();
  let day = date.getDate();
  let dayOfWeek = date.getDay();

  if (hour > 12) hour -= 12;
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  clock.innerHTML = `${hour} : ${min} : ${sec} <br/> ${monthsName[months]} ${day} ${dayName[dayOfWeek]}`;
}

setInterval(run, 1000);
