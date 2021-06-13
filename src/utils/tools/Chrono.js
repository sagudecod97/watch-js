import chronoString from '../chrono-functions/chrono-string.js';
import ChronoLap from '../chrono-functions/chronoLap.js';

class Chrono {

    createIntervalChrono() {
        let newInterval = setInterval(this.createChrono, 100);
        return newInterval;
    }

    createChrono() {
        let currentTime = window.chronoTime;
        let hours = currentTime.hours;
        let minutes = currentTime.minutes;
        let seconds = currentTime.seconds;
        let mili = (new Date().getMilliseconds());

        let chronoTime = document.getElementsByClassName('chrono_time')[0];
        let chronoLaps = document.getElementsByClassName('chrono-laps_time')[0];

        if (window.chronoStop) {
            return;
        }

        if (mili < currentTime.mili) {
            ++seconds;
            window.chronoTime.mili = mili
        }

        if (seconds >= 60) {
            ++minutes;
            seconds = 0;
        }

        if (minutes >= 60) {
            ++hours;
            minutes = 0;
        }

        let timeString = chronoString({ hours, minutes, seconds, mili }, false);
        timeString.miliseconds = String(timeString.miliseconds).slice(0,2)
        chronoTime.innerHTML = `
        ${timeString.time}<span class="chrono_time-ms">.${timeString.miliseconds}</span>`;

        window.chronoTime = { hours, minutes, seconds, mili };

        if(window.firstLap) {
            let currentLap = Array.from(chronoLaps.childNodes);
            let currentFilter = currentLap.filter(elem => elem.nodeName === 'DIV' ? true : false );
            currentFilter[0].replaceWith(ChronoLap(window.lapNum, window.chronoTime));
        }
    }
};

export default Chrono;
