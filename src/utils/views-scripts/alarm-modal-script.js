'use strict'

import { fromConfigToTry, closeModalTryConfig, configUpAndDown, startAlarm } from '../alarm-functions/alarmModalsFuncs.js';

let alarmContainer = document.getElementsByClassName('alarm-container')[0];
//let alarmTryContainer = document.getElementsByClassName('alarm-try')[0];

// Alarm config elements
const btnCloseCfg = document.getElementsByClassName('alarm-container_modal-head_close')[0];
const hoursUpCfg = document.getElementById('hours-up');
const hoursDownCfg = document.getElementById('hours-down');
const minutesUpCfg = document.getElementById('minutes-up');
const minutesDownCfg = document.getElementById('minutes-down');
const btnTryCfg = document.getElementsByClassName('alarm-container_modal-config_buttons-try')[0];
const btnCancelCfg = document.getElementsByClassName('alarm-container_modal-config_buttons-cancel')[0];
const btnStartCfg = document.getElementsByClassName('alarm-container_modal-config_buttons-start')[0];

// Alarm try elements
const btnCloseTry = document.getElementsByClassName('alarm_head-close')[0];
const btnAcceptTry = document.getElementsByClassName('alarm_body-btn_button')[0];

// Alarm configuration modal listeners
const closeModalConfig = () => alarmContainer.classList.add('not-show');
btnCloseCfg.addEventListener('click', closeModalConfig);
btnCancelCfg.addEventListener('click', closeModalConfig);

btnTryCfg.addEventListener('click', fromConfigToTry);

hoursUpCfg.addEventListener('click', configUpAndDown);
hoursDownCfg.addEventListener('click', configUpAndDown);
minutesUpCfg.addEventListener('click', configUpAndDown);
minutesDownCfg.addEventListener('click', configUpAndDown);

btnStartCfg.addEventListener('click', startAlarm);

// Alarm try modal listeners
btnCloseTry.addEventListener('click', closeModalTryConfig);
btnAcceptTry.addEventListener('click', closeModalTryConfig);
