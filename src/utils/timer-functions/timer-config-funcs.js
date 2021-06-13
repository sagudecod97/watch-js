'use strict'

import { changeOption } from '../tools/changeOption.js';
import { timerTimeString } from '../tools/timerTimeString.js'
import { createSoundAlarm } from '../tools/createSoundAlarm.js';

export const timerConfigToTry = () => {
    const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];
    const selectSounds = document.getElementById('config-sounds');
    let { sounds } = window.timerConfig || { sounds: selectSounds.value };
    window.tryTimer = true;

    if (sounds.length === 0) {
        sounds = selectSounds.value;
    }
    
    createSoundAlarm(sounds);
    timerConfigContainer.classList.add('not-show');
    timerDoneContainer.classList.remove('not-show');
};

export const timerUpAndDown = (event) => {
    let { classList } = event.target
    let classArr = Array.from(classList)
    const selectHours = document.getElementById('config-hours');
    const selectMinutes = document.getElementById('config-minutes');
    const selectSeconds = document.getElementById('config-seconds');

    if (classArr.includes('t-cfg_hours-up')) {
        changeOption(event.target, false, selectHours);
    } else if (classArr.includes('t-cfg_hours-down')) {
        changeOption(event.target, true, selectHours);
    } else if (classArr.includes('t-cfg_minutes-up')) {
        changeOption(event.target, false, selectMinutes);
    } else if (classArr.includes('t-cfg_minutes-down')) {
        changeOption(event.target, true, selectMinutes);
    } else if (classArr.includes('t-cfg_seconds-up')) {
        changeOption(event.target, false, selectSeconds);
    } else if (classArr.includes('t-cfg_seconds-down')) {
        changeOption(event.target, true, selectSeconds);
    }
};

export const getTimerInfo = () => {
    const selectHoursVal = document.getElementById('config-hours').value;
    const selectMinutesVal = document.getElementById('config-minutes').value;
    const selectSecondsVal = document.getElementById('config-seconds').value;
    const selectSounds = document.getElementById('config-sounds').value;
    const inputValue = document.getElementsByClassName('tempo-config_body-name')[0].value;
    const modalConfig = document.getElementsByClassName('timer-container_cfg')[0];

    let timerCountdown = document.getElementsByClassName('tempo_time')[0];
    timerCountdown.innerHTML = timerTimeString(selectHoursVal, selectMinutesVal, selectSecondsVal);

    let timerConfig = {
        hours: selectHoursVal,
        minutes: selectMinutesVal,
        seconds: selectSecondsVal,
        sounds: selectSounds,
        nameTimer: inputValue,
    }

    window.timerConfig = timerConfig;
    window.timerReset = timerConfig;
    modalConfig.classList.add('not-show');
}
