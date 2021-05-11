'use strict'

import AlarmModal from '../../templates/alarm-modal.js';
import AlarmModalConfig from '../../templates/alarm-modal-config.js';

const twelveRadio = document.getElementById('twelve');
const twentyRadio = document.getElementById('twenty-four');
const configBtn = document.getElementsByClassName('main_content-config_btn')[0];
let alarmContainer = document.getElementsByClassName('alarm-container')[0];

twelveRadio.addEventListener('click', () => {
    twelveRadio.checked = true;
    twentyRadio.checked = false;
});

twentyRadio.addEventListener('click', () => {
    twentyRadio.checked = true;
    twelveRadio.checked = false;
});

configBtn.addEventListener('click', () => {
    //alarmContainer.classList.remove('not-show');
    alarmContainer.innerHTML = AlarmModalConfig();
    window.funct()
})

