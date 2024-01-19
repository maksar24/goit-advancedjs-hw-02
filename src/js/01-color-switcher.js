const elements = {
    body: document.querySelector("body"),
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
};
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeColor() {
    timerId = setInterval(() => {
        let color = getRandomHexColor();
        elements.body.style.backgroundColor = color;
    }, 1000);
    elements.btnStart.disabled = true;
};

function stopChangeColor() {
    clearInterval(timerId);
    elements.btnStart.disabled = false;
};

elements.btnStart.addEventListener("click", changeColor);
elements.btnStop.addEventListener("click", stopChangeColor);