'use strict'

import { Chrono, ChronoLaps } from '../../templates/chronos.js'
import IndexMain from '../../templates/index-main.js';
import Tempo from '../../templates/tempo.js';
import { Watches, WatchesWatch} from '../../templates/watches.js';
import addScript from '../tools/addScript.js';

const selectMode = (event) => {
    const { innerHTML, classList } = event.target;

    let mainContent = document.getElementById('main-content');
    let valueTag = String(innerHTML).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let headerElems = document.getElementsByClassName('header_list-item');

    for (let i = 0; i < headerElems.length; i++) {
        headerElems[i].classList.remove('active');
    }

    classList.add('active')
    
    switch(valueTag) {
        case 'temporizador':
            mainContent.innerHTML = Tempo();
            break;
        case 'cronometro':
            mainContent.innerHTML = (ChronoLaps() + Chrono()); 
            break;
        case 'reloj':
            mainContent.innerHTML = (Watches() + WatchesWatch());
            break;
        case 'alarma':
        default:
            addScript('./utils/views-scripts/alarm-script.js')
            mainContent.innerHTML = IndexMain();
            break;
    }
};

export default selectMode;
