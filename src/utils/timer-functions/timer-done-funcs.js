'use strict'

import Timer from '../tools/Timer.js';
import { timerTimeString } from '../tools/timerTimeString.js'

export const timerDoneToMain = () => {
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];
    const timerMain = document.getElementsByClassName('tempo_time')[0];
    let { hours, minutes, seconds } = window.timerReset;


    if (window.timerMode === 'reset') {
        if (window.timer) {
            clearInterval(window.timer.id);
            window.timer = null;
        }

        timerMain.innerHTML = timerTimeString(hours, minutes, seconds)

        const newTimer = new Timer();

        let timerId = newTimer.createIntervalTimer();
        window.timer = { id: timerId, timer: newTimer };
    }

    timerDoneContainer.classList.add('not-show');
    window.alarmAudio.pause();
    window.alarmAudio = null;
};

export const timerDoneToConfig = () => {
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];
    const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
    const stopStartBtn = document.getElementsByClassName('tempo_buttons-start')[0];
    const timerMain = document.getElementsByClassName('tempo_time')[0];

    if (window.tryTimer) {
        timerDoneContainer.classList.add('not-show');
        timerConfigContainer.classList.remove('not-show');
        window.tryTimer = null;
    } else {
        timerDoneContainer.classList.add('not-show');
        timerConfigContainer.classList.add('not-show');
        stopStartBtn.classList.remove('stop-button');
        stopStartBtn.innerHTML = 'Iniciar';
    }

    if (window.timerMode === 'reset') {
        if (window.timer) {
            clearInterval(window.timer.id);
            window.timer = null;
        }


        const newTimer = new Timer();

        let timerId = newTimer.createIntervalTimer();
        window.timer = { id: timerId, timer: newTimer };
    }

    window.alarmAudio.pause();
    window.alarmAudio = null;
};
