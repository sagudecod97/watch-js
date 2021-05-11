'use strict'

import selectMode from './utils/tools/selectMode.js';
import IndexMain from './templates/index-main.js';
import addScript from './utils/tools/addScript.js';

const alarmHeader = document.getElementsByClassName("alarm-head")[0];
const timerHeader = document.getElementsByClassName("timer-head")[0];
const chronoHeader = document.getElementsByClassName("chrono-head")[0];
const watchHeader = document.getElementsByClassName("watch-head")[0];

alarmHeader.addEventListener("click", selectMode);
timerHeader.addEventListener("click", selectMode);
chronoHeader.addEventListener("click", selectMode);
watchHeader.addEventListener("click", selectMode);

let alarmContainer = document.getElementsByClassName('main_content')[0];

let observerer = new MutationObserver(function(mutations) {
    mutations.forEach(mutation => console.log("mutations", mutation))
});
let config = { attributes: true, childList: true, characterData: true };
observerer.observe(alarmContainer, config);

window.observerer = observerer;

window.addEventListener("load", () => {
    let mainContent = document.getElementById('main-content');
    mainContent.innerHTML = IndexMain();
    addScript('./utils/views-scripts/alarm-script.js');
});
