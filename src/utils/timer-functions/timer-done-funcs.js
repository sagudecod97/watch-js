'use strict'

export const timerDoneToMain = () => {
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];
    timerDoneContainer.classList.add('not-show');
    window.alarmAudio.pause();
    window.alarmAudio = null;
};

export const timerDoneToConfig = () => {
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];
    const timerConfigContainer = document.getElementsByClassName('timer-container_cfg')[0];

    timerDoneContainer.classList.add('not-show');
    timerConfigContainer.classList.remove('not-show');
    window.alarmAudio.pause();
    window.alarmAudio = null;
};
