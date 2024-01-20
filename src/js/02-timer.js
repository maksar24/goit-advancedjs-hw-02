import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    dater: document.getElementById("datetime-picker"),
    btnStart: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
};

const dateNow = new Date().getTime();
let chosenDate = 0;
let timerId = null;
elements.btnStart.disabled = true;

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
    console.log(selectedDates[0]);
    chosenDate = selectedDates[0].getTime();
    if (chosenDate <= dateNow) {
        iziToast.show({
            title: "Alert",
            message: "Please choose a date in the future",
            theme: 'light',
            color: '#5aad5e'
        });
    } else {
        elements.btnStart.disabled = false;
    }
},
};

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
};

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
};

function startTimer() {
    elements.btnStart.disabled = true;
    const interval = setInterval(() => {
        const dateNow = new Date().getTime();
        let differenceTime = convertMs(chosenDate - dateNow);
        elements.days.textContent = addLeadingZero(differenceTime.days);
        elements.hours.textContent = addLeadingZero(differenceTime.hours);
        elements.minutes.textContent = addLeadingZero(differenceTime.minutes);
        elements.seconds.textContent = addLeadingZero(differenceTime.seconds);
        
        if (chosenDate <= dateNow) {
            elements.days.textContent = "00";
            elements.hours.textContent = "00";
            elements.minutes.textContent = "00";
            elements.seconds.textContent = "00";
            clearInterval(timerId);
        }
    }, 0);
    timerId = setInterval(interval, 1000);
};

flatpickr(elements.dater, options);
elements.btnStart.addEventListener("click", startTimer);