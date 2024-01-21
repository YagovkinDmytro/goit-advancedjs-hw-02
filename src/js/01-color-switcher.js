const mainPage = document.querySelector('body');

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', handlerStart);
stopBtn.addEventListener('click', handlerStop);
let btnIntervalId = null;

function handlerStart() {
  btnIntervalId = setInterval(() => {
    mainPage.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

function handlerStop() {
  clearInterval(btnIntervalId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
