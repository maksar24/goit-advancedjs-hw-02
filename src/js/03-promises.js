import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
let currentDate = {};

function handleInput({target}) {
  currentDate[target.name] = target.value;
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function handleSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = currentDate;

  for (let i = 1; i <= Number(amount); i++) {
    const currentDelay = Number(amount) === 1 ? Number(delay) : Number(delay) + Number(step) * (i - 1);

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
      iziToast.show({
        title: "✅",
        message: `Fulfilled promise ${position} in ${delay}ms`,
        theme: 'light',
        color: '#5aad5e'
      });
    })
      .catch(({ position, delay }) => {
      iziToast.show({
        title: "❌",
        message: `Rejected promise ${position} in ${delay}ms`,
        theme: 'light',
        color: '#b35c5c'
      });
    });
  };
  form.reset();
  currentDate = {};
};

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);