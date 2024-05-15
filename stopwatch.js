let timer;
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let resetTime = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1000);
        startStopBtn.innerHTML = 'Stop';
        resetBtn.style.display = 'inline-block';
        running = true;
        resetTime = false;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerHTML = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    resetTime = true;
    display.innerHTML = '00:00:00';
    startStopBtn.innerHTML = 'Start';
    resetBtn.style.display = 'none';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    if (resetTime) {
        difference = 0;
    }

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
