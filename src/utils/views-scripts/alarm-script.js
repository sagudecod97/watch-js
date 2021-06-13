'use strict'

import { alarmHours, alarmMinutes, alarmSounds } from '../tools/alarmModalOptions.js';
import { deactivateAlarm } from '../alarm-functions/alarmModalsFuncs.js';
 
const twelveRadio = document.getElementById('twelve');
const twentyRadio = document.getElementById('twenty-four');
const configBtn = document.getElementsByClassName('main_content-config_btn')[0];
let alarmContainer = document.getElementsByClassName('alarm-container')[0];

const deactivateButton = document.getElementsByClassName('alarm-count_btn')[0];

// Alarm screen listeners
twelveRadio.addEventListener('click', () => {
    twelveRadio.checked = true;
    twentyRadio.checked = false;
    window.localStorage.setItem('hours-mode', '12');
});

twentyRadio.addEventListener('click', () => {
    twentyRadio.checked = true;
    twelveRadio.checked = false;
    window.localStorage.setItem('hours-mode', '24');
});

configBtn.addEventListener('click', () => {
    let selectHours =  document.getElementById('alarm-hours');
    let selectMinutes = document.getElementById('alarm-minutes');
    let selectSounds =  document.getElementById('sounds');
    let mode = window.localStorage.getItem('hours-mode');

    selectHours.innerHTML = alarmHours(mode);
    selectMinutes.innerHTML = alarmMinutes();
    selectSounds.innerHTML = alarmSounds;

    alarmContainer.classList.remove('not-show');
});

// Alarm screnn count
deactivateButton.addEventListener('click', deactivateAlarm);

window.addEventListener("load", () => {
    let hoursMode = window.localStorage.getItem('hours-mode');

    if (hoursMode === null) {
        twentyRadio.checked = true;
    } else {
        hoursMode === '12'
        ? (twelveRadio.checked = true)
        : (twentyRadio.checked = true) 
    }
});
