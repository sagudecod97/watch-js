'use strict'

import { timerDoneToMain, timerDoneToConfig } from '../timer-functions/timer-done-funcs.js';
 
const closeDoneIcon = document.getElementsByClassName('tempo-done_head-icon')[0];
const acceptDoneBtn = document.getElementsByClassName('tempo-done_btn')[0];

closeDoneIcon.addEventListener('click', timerDoneToMain);
acceptDoneBtn.addEventListener('click', timerDoneToConfig);
