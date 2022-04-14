import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector("#datetime-picker")
const bStart = document.querySelector('[data-start]')
const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')
const div = document.querySelector('.timer')
const divs = document.querySelectorAll('.field')

let difference = 0;
bStart.disabled=true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(dateStr) {
    difference = new Date(dateStr).getTime() - new Date().getTime();      
    if (difference > 0) {  
      bStart.disabled = false      
    } else {
      Notiflix.Notify.failure("Please choose a date in the future")
      bStart.disabled=true
    }
  },
};

bStart.addEventListener("click", () => {
  writeTime()
  bStart.disabled=true
})

function writeTime() {   
  let  timerId  = setInterval(() => {    
  difference = difference-1000
  const converted = convertMs(difference)  
  days.textContent = addLeadingZero(converted.days)
  hours.textContent = addLeadingZero(converted.hours)
  minutes.textContent = addLeadingZero(converted.minutes)
    seconds.textContent = addLeadingZero(converted.seconds)   
    divs.forEach(e => {
      e.style.marginRight = converted.seconds + "px";
  if (difference <1000){clearInterval(timerId)}
    });
      
   }, 1000);
}
function addLeadingZero(value) {
  return value.toString().padStart(2,0)   
}
flatpickr(input, options) 
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


div.style.display = "flex"
