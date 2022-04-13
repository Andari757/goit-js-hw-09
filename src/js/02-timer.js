import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector("#datetime-picker")
const bStart = document.querySelector('[data-start]')
let difference = 0;
bStart.disabled=true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(dateStr) {       
    const selectedTime = new Date(dateStr).getTime()    
    const now = new Date().getTime()
    difference = selectedTime - now;        
    if (difference > 0) {  
      bStart.disabled = false      
    } else {
      Notiflix.Notify.failure("Please choose a date in the future")
      bStart.disabled=true
    }
  },
};
bStart.addEventListener("click", () => {
  
})

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


