'use strict'

import { alarmHours, alarmMinutes, alarmSounds } from '../tools/alarmModalOptions.js';

const twelveRadio = document.getElementById('twelve');
const twentyRadio = document.getElementById('twenty-four');
const configBtn = document.getElementsByClassName('main_content-config_btn')[0];
let alarmContainer = document.getElementsByClassName('alarm-container')[0];

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
    alarmContainer.classList.remove('not-show');
});

window.addEventListener("load", () => {
    let hoursMode = window.localStorage.getItem('hours-mode');
    let selectHours =  document.getElementById('alarm-hours');
    let selectMinutes = document.getElementById('alarm-minutes');
    let selectSounds =  document.getElementById('sounds');

    selectHours.innerHTML = alarmHours(true);
    selectMinutes.innerHTML = alarmMinutes();
    selectSounds.innerHTML = alarmSounds;

    if (hoursMode === null) {
        twentyRadio.checked = true;
    } else {
        hoursMode === '12'
        ? (twelveRadio.checked = true)
        : (twentyRadio.checked = true) 
    }
})

