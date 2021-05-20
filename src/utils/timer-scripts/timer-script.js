'use strict'

const startTimerBtn = document.getElementsByClassName('tempo_buttons-start')[0];
const restartTimerBtn = document.getElementsByClassName('tempo_buttons-restart')[0];
const editTimerBtn = document.getElementsByClassName('tempo_buttons-edit')[0];

const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];

editTimerBtn.addEventListener('click', () => timerConfigContainer.classList.remove('not-show'));
