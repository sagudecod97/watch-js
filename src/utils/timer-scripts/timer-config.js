'use strict'

import { timerConfigToTry, timerUpAndDown, getTimerInfo } from '../timer-functions/timer-config-funcs.js';

const hoursUpBtn = document.getElementsByClassName('t-cfg_hours-up')[0];
const hoursDownBtn = document.getElementsByClassName('t-cfg_hours-down')[0];
const minutesUpBtn = document.getElementsByClassName('t-cfg_minutes-up')[0];
const minutesDownBtn = document.getElementsByClassName('t-cfg_minutes-down')[0];
const seceondsUpBtn = document.getElementsByClassName('t-cfg_seconds-up')[0];
const seceondsDownBtn = document.getElementsByClassName('t-cfg_seconds-down')[0];

const closeConfigBtn = document.getElementsByClassName('tempo-config_body-buttons_close')[0];
const tryConfigBtn = document.getElementsByClassName('tempo-config_body-buttons_try')[0];
const cancelConfigBtn = document.getElementsByClassName('tempo-config_body-buttons_cancel')[0];
const closeConfigIcon = document.getElementsByClassName('tempo-config_head-icon')[0];

const radioStop = document.getElementById('stop-tempo');
const radioReset = document.getElementById('reset-tempo');

const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
//const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];

const closeModalConfig = () => timerConfigContainer.classList.add('not-show');
closeConfigBtn.addEventListener('click', getTimerInfo);
cancelConfigBtn.addEventListener('click', closeModalConfig);
closeConfigIcon.addEventListener('click', closeModalConfig);

tryConfigBtn.addEventListener('click', timerConfigToTry);

radioStop.addEventListener('click', (event) => {
    event.target.checked = true;
    radioReset.checked = false;
    window.timerMode = 'stop';
})
radioReset.addEventListener('click', (event) => {
    event.target.checked = true;
    radioStop.checked = false;
    window.timerMode = 'reset';
})

hoursUpBtn.addEventListener('click', timerUpAndDown);
hoursDownBtn.addEventListener('click', timerUpAndDown);
minutesUpBtn.addEventListener('click', timerUpAndDown);
minutesDownBtn.addEventListener('click', timerUpAndDown);
seceondsUpBtn.addEventListener('click', timerUpAndDown);
seceondsDownBtn.addEventListener('click', timerUpAndDown);
