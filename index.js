const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const newColor = () => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};

let intervalColor = null;

refs.start.addEventListener('click', () => {
    if (intervalColor != null) {
        return;
    };
    intervalColor = setInterval(newColor, 1000);
});

refs.stop.addEventListener('click', () => {
    clearInterval(intervalColor);
    intervalColor = null;
});