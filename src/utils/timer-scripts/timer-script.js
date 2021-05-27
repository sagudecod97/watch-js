'use strict'

import { timerOptions, alarmSounds } from '../tools/timerModalOptions.js';
import { resetTimer } from '../timer-functions/timer-main.js';
import Timer from '../tools/Timer.js';

const startTimerBtn = document.getElementsByClassName('tempo_buttons-start')[0];
const restartTimerBtn = document.getElementsByClassName('tempo_buttons-restart')[0];
const editTimerBtn = document.getElementsByClassName('tempo_buttons-edit')[0];

const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
//const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];

restartTimerBtn.addEventListener('click', resetTimer);
editTimerBtn.addEventListener('click', () => timerConfigContainer.classList.remove('not-show'));

startTimerBtn.addEventListener('click', (event) => {
    let { innerHTML } = event.target;
    let configModal = document.getElementsByClassName('timer-container_cfg')[0];
    let timerCfg = window.timerConfig; 
    
    if (typeof timerCfg === 'undefined') {
        return configModal.classList.remove('not-show');
    } else if (timerCfg.hours == 0 && timerCfg.minutes == 0 && timerCfg.seconds == 0) {
        return;
    }

    if (innerHTML === 'Iniciar') {
        window.stopTimer = false;
        event.target.innerHTML = 'Parar';
        event.target.classList.add('stop-button');
    } else if (innerHTML === 'Parar') {
        window.stopTimer = true;
        event.target.innerHTML = 'Iniciar';
        event.target.classList.remove('stop-button');
        return;
    }

    if (!window.timer) {
        const newTimer = new Timer();

        let timerId = newTimer.createIntervalTimer();
        window.timer = { id: timerId, timer: newTimer };
    }
})

window.addEventListener('load', () => {
    const selectHours = document.getElementById('config-hours');
    const selectMinutes = document.getElementById('config-minutes');
    const selectSeconds = document.getElementById('config-seconds');
    const selectSounds = document.getElementById('config-sounds');

    selectHours.innerHTML = timerOptions(true);
    selectMinutes.innerHTML = timerOptions();
    selectSeconds.innerHTML = timerOptions();
    selectSounds.innerHTML = alarmSounds;
    window.timerMode = 'stop'
});
