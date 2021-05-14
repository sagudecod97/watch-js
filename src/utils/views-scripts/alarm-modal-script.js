'use strict'

import { fromConfigToTry } from '../alarm-functions/alarmModalsFuncs.js';
import { WatchMaker } from '../tools/watchMaker.js';

let alarmContainer = document.getElementsByClassName('alarm-container')[0];

const btnCloseCfg = document.getElementsByClassName('alarm-container_modal-head_close')[0];
const hoursUpCfg = document.getElementById('hours-up');
const hoursDownCfg = document.getElementById('hours-down');
const minutesUpCfg = document.getElementById('hours-up');
const minutesDownCfg = document.getElementById('hours-down');
const btnTryCfg = document.getElementsByClassName('alarm-container_modal-config_buttons-try')[0];
const btnCancelCfg = document.getElementsByClassName('alarm-container_modal-config_buttons-cancel')[0];
const btnStartCfg = document.getElementsByClassName('alarm-container_modal-config_buttons-start')[0];

// Alarm configuration modal listeners
const closeModalConfig = () => alarmContainer.classList.add('not-show');
btnCloseCfg.addEventListener('click', closeModalConfig);
btnCancelCfg.addEventListener('click', closeModalConfig);

btnTryCfg.addEventListener('click', fromConfigToTry)
