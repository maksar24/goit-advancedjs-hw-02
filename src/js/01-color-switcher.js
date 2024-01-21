const elements = {
    body: document.querySelector("body"),
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
};
let timerId = null;
elements.btnStop.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeColor() {
    let color = getRandomHexColor();
    elements.body.style.backgroundColor = color;
};

function colorSwitcher() {
    elements.btnStart.disabled = true;
    elements.btnStop.disabled = false;
    changeColor();
    timerId = setInterval(changeColor, 1000);
};

function stopChangeColor() {
    clearInterval(timerId);
    elements.btnStart.disabled = false;
    elements.btnStop.disabled = true;
};

elements.btnStart.addEventListener("click", colorSwitcher);
elements.btnStop.addEventListener("click", stopChangeColor);