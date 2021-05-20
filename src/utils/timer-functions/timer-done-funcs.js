'use strict'

export const timerDoneToMain = () => {
    const timerDoneContainer = document.getElementsByClassName('timer-container_done')[0];
    timerDoneContainer.classList.add('not-show');
}