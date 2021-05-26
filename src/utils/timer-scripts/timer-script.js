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

startTimerBtn.addEventListener('click', () => {
    let configModal = document.getElementsByClassName('timer-container_cfg')[0];
    
    if (typeof window.timerConfig === 'undefined') {
        return configModal.classList.remove('not-show');
    }

    const newTimer = new Timer();

    let timerId = newTimer.createIntervalTimer();
    window.timer = { id: timerId, timer: newTimer };
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
});
