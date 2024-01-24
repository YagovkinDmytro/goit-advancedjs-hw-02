import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  input: document.querySelector('input'),
  button: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

elements.button.setAttribute('disabled', '');

elements.button.addEventListener('click', setCounter);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      iziToast.error({
        message: 'Please choose a date in the future',
      });
    } else {
      let differenceTime = selectedDates[0] - options.defaultDate;
      elements.button.removeAttribute('disabled');
      options.differanceObj = convertMs(differenceTime);
    }
  },
};

flatpickr(elements.input, options);

let cuntDifferense = null;
cuntDifferense = setInterval(() => {}, 1000);

function setCounter() {
  elements.days.textContent = addLeadingZero(options.differanceObj.days);
  elements.hours.textContent = addLeadingZero(options.differanceObj.hours);
  elements.minutes.textContent = addLeadingZero(options.differanceObj.minutes);
  elements.seconds.textContent = addLeadingZero(options.differanceObj.seconds);
  elements.button.setAttribute('disabled', '');
}

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
