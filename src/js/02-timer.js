import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let timerCounter = null;

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
        position: 'topRight',
      });
    } else {
      options.differenceTime = selectedDates[0] - options.defaultDate;
      elements.button.removeAttribute('disabled');
    }
  },
};

flatpickr(elements.input, options);

function setCounter() {
  timerCounter = setInterval(() => {
    let counterTime = (options.differenceTime = `${
      options.differenceTime - 1000
    }`);
    console.log(counterTime);
    if (counterTime < 1000) {
      clearInterval(timerCounter);
    }
    options.differanceObj = convertMs(counterTime);
    elements.days.textContent = addLeadingZero(options.differanceObj.days);
    elements.hours.textContent = addLeadingZero(options.differanceObj.hours);
    elements.minutes.textContent = addLeadingZero(
      options.differanceObj.minutes
    );
    elements.seconds.textContent = addLeadingZero(
      options.differanceObj.seconds
    );
  }, 1000);

  elements.button.setAttribute('disabled', '');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
