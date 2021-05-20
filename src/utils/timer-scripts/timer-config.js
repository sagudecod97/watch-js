'use strict'

import { timerConfigToTry } from '../timer-functions/timer-config-funcs.js';

const closeConfigBtn = document.getElementsByClassName('tempo-config_body-buttons_close')[0];
const tryConfigBtn = document.getElementsByClassName('tempo-config_body-buttons_try')[0];
const cancelConfigBtn = document.getElementsByClassName('tempo-config_body-buttons_cancel')[0];
const closeConfigIcon = document.getElementsByClassName('tempo-config_head-icon')[0];

const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];

const closeModalConfig = () => timerConfigContainer.classList.add('not-show');
closeConfigBtn.addEventListener('click', closeModalConfig);
cancelConfigBtn.addEventListener('click', closeModalConfig);
closeConfigIcon.addEventListener('click', closeModalConfig);

tryConfigBtn.addEventListener('click', timerConfigToTry);
