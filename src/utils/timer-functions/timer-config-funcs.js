'use strict'

export const timerConfigToTry = () => {
    const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];

    timerConfigContainer.classList.add('not-show');
    timerDoneContainer.classList.remove('not-show');
}