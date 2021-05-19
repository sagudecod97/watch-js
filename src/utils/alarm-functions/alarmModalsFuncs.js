'use strict'

import { WatchMaker } from '../tools/watchMaker.js';
import AlarmCountTime from '../../templates/alarmCountTime.js';

export const fromConfigToTry = () => {
    let alarmCfg = document.getElementsByClassName('alarm-container_modal')[0];
    let alarmTry = document.getElementsByClassName('alarm-try')[0];

    alarmCfg.classList.add('not-show');
    alarmTry.classList.remove('not-show')
};

export const closeModalTryConfig = () => {
    let alarmCfg = document.getElementsByClassName('alarm-container_modal')[0];
    let alarmContainer = document.getElementsByClassName('alarm-container')[0];
    let alarmTryContainer = document.getElementsByClassName('alarm-try')[0];

    window.alarmAudio.pause()

    alarmCfg.classList.remove('not-show');
    alarmContainer.classList.add('not-show');
    alarmTryContainer.classList.add('not-show');
};

export const configUpAndDown = (event) => {
    let { id } = event.target;

    let selectHours =  document.getElementById('alarm-hours');
    let selectMinutes = document.getElementById('alarm-minutes');

    const changeOption = (target, down, selectOptions) => {
        let currentOptIndex;
        let options = selectOptions.options;

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected)
                currentOptIndex = i;
        };
        
        if (down) {
            if (currentOptIndex === 0) { return; };
            options[currentOptIndex - 1].selected = true;
        } else {
            if (currentOptIndex === (options.length - 1)) { return; };

            options[currentOptIndex + 1].selected = true;
        }
    }

    if (id.includes('hour'))
        changeOption(event.target, id.includes('down'), selectHours);
    else
        changeOption(event.target, id.includes('down'), selectMinutes);
};

export const startAlarm = () => {
    const mainContent =  document.getElementsByClassName('--main-content')[0];
    const alarmCount = document.getElementsByClassName('alarm-count')[0];
    const alarmCountTemp = document.getElementsByClassName('alarm-count_hour')[0];
    const alarmHourP = document.getElementsByClassName('alarm-count_hour')[0];
    const alarmDateP = document.getElementsByClassName('alarm-count_date')[0];
    const alarmContainer = document.getElementsByClassName('alarm-container')[0];

    let alarmNameP = document.getElementsByClassName('alarm-count_title')[0];
    let alarmCountP = document.getElementsByClassName('alarm-count_alarm')[0];

    const hoursMode = window.localStorage.getItem('hours-mode');

    let { hours, minutes, alarmName } = getAlarmInfo();
    
    alarmNameP.innerHTML = alarmName;
    alarmCountP.innerHTML = transformHour(hours, minutes, hoursMode)

    alarmHourP.innerHTML = AlarmCountTime(true);
    alarmDateP.innerHTML = AlarmCountTime(false);

    mainContent.classList.add('not-show');
    alarmCount.classList.remove('not-show');
    alarmContainer.classList.add('not-show');

    let watch = new WatchMaker(alarmCountTemp, hoursMode);
    window.alarmWatch = { watch, id: watch.createIntervalWatch()};
}

export const deactivateAlarm = () => {
    const alarmCount = document.getElementsByClassName('alarm-count')[0];
    const mainContent = document.getElementsByClassName('--main-content')[0];

    alarmCount.classList.add('not-show');
    mainContent.classList.remove('not-show');

    window.alarmWatch.watch.clearOne(window.alarmWatch.id);
}

const getAlarmInfo = () => {
    const selectHours = document.getElementById('alarm-hours');
    const selectMinutes = document.getElementById('alarm-minutes');
    const selectSounds = document.getElementById('sounds');
    const alarmName = document.getElementsByClassName('alarm-container_modal-config_title-input')[0];

    let obj = {
        hours: selectHours.value,
        minutes: selectMinutes.value,
        alarmName: alarmName.value,
        sound: selectSounds.value,
    }

    window.currentAlarm = obj;

    return obj;
}

const transformHour = (hour, minutes, mode) => {
    const twentyToTwelve = {
        "13": 1, "14": 2, "15": 3, "16": 4, "17": 5, "18": 6,
        "19": 7, "20": 8, "21": 9, "22": 10, "23": 11, "24": 12
    }

    if (hour.includes('pm') || hour.includes('am'))
        hour = hour.slice('-')[0];

    let hourString;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (parseInt(hour) < 10)
            hour = '0' + hour;

    if (mode == 12) {
        if (hour < 12) {
            hourString = `${hour}:${minutes} am`;
        } else {
            hour = twentyToTwelve[hour];
            hourString = `${hour}:${minutes} pm`;
        }
    } else {
        hourString = `${hour}:${minutes}`;
    };

    return hourString;
}
