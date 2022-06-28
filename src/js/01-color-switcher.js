const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timered = null;


startButton.addEventListener('click', onButtonStart);
stopButton.addEventListener('click', onButtonStop);

function onButtonStart() {
  startButton.setAttribute('disabled', true);
  timered = setInterval(changeColor, 1000);
};

function onButtonStop() {
  clearInterval(timered);
  startButton.removeAttribute('disabled');
}

function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
