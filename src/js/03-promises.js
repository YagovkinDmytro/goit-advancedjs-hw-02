import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.target.delay.value);
  let step = Number(evt.target.step.value);
  let amount = Number(evt.target.amount.value);
  const position = 1;
  createPromise(position, delay);
  setTimeInternal(amount, step, delay);
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function setTimeInternal(amount, step, delay) {
  let position = 1;
  let nextDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(position, nextDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        iziToast.success({
          title: 'OK',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      });
    position += 1;
    nextDelay += step;
  }
}
