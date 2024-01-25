import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  let delay = evt.target.delay.value;
  let step = evt.target.step.value;
  let amount = evt.target.amount.value;

  createPromise(amount, delay, step);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      setInterval(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, step);
    }, delay);
  });
}

createPromise(amount, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    iziToast.success({
      title: 'OK',
      message: `✅ Fulfilled promise ${position} in ${delay}ms`,
      position: 'center',
    });
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    iziToast.error({
      title: 'Error',
      message: `❌ Rejected promise ${position} in ${delay}ms`,
      position: 'center',
    });
  });
