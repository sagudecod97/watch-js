'use strict'

export const fromConfigToTry = () => {
    let alarmCfg = document.getElementsByClassName('alarm-container_modal')[0];
    let alarmTry = document.getElementsByClassName('alarm-try')[0];

    alarmCfg.classList.add('not-show');
    alarmTry.classList.remove('not-show')
};
