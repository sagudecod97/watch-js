'use important'

import ChronoLap from '../chrono-functions/chronoLap.js';
import Chrono from '../tools/Chrono.js';

let btnStart = document.getElementsByClassName('chrono_btns-start')[0];
let btnLap = document.getElementsByClassName('chrono_btns-lap')[0];

let chronoTime = document.getElementsByClassName('chrono_time')[0];
let chronoLapsTime = document.getElementsByClassName('chrono-laps_time')[0];

let lapsContainer = document.getElementsByClassName('chrono-laps_time')[0];

btnStart.addEventListener('click', (event) => {
  if (event.target.innerHTML.toLowerCase() === 'iniciar') {
    event.target.innerHTML = 'Parar';
    event.target.classList.add('chrono-stop');
    btnLap.innerHTML = 'Vuelta';
    window.chronoStop = false;

    if (!window.chrono) {
      let chrono = new Chrono();
      window.chrono = chrono.createIntervalChrono();
    }

  } else {
    event.target.innerHTML = 'Iniciar';
    event.target.classList.remove('chrono-stop');
    window.chronoStop = true;
    btnLap.innerHTML = 'Reiniciar';
  }
});

btnLap.addEventListener('click', (event) => {
    if (event.target.innerHTML.toLowerCase() === 'reiniciar') {
      clearInterval(window.chrono);
      window.chrono = null;
      window.lapNum = 0;
      window.chronoTime = { hours: 0, minutes: 0, seconds: 0, mili: 0, };
      window.chronoStop = null;
      window.firstLap = null;
      chronoTime.innerHTML = `<p class="chrono_time">00:00:00<span class="chrono_time-ms">.00</span></p>`;
      
      while(chronoLapsTime.firstChild) { chronoLapsTime.lastChild.remove() };

    } else {

      if (window.firstLap) {
        let currentLap = lapsContainer.childNodes[1];
        lapsContainer.insertBefore(ChronoLap(window.lapNum, window.chronoTime), currentLap);
        window.lapNum = window.lapNum + 1;
      } else {
        lapsContainer.append(ChronoLap(window.lapNum + 2, window.chronoTime));
        lapsContainer.append(ChronoLap(window.lapNum + 1, window.chronoTime));
        window.firstLap = true;
        window.lapNum = 2;
      }

    };
});

window.addEventListener('load', () => {
  window.lapNum = 0;
  window.chronoTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    mili: 0,
  }
})
