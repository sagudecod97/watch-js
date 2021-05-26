'use strict'

export const timerOptions = (hours = false) => {
    let optionsHours = [];
    let optionsMinutes = [];

    if (hours) {
        for (let i = 0; i <= 99; i++) {
            let stringHour = `<option value="${i}">${i < 10 ? '0' + i : i}</option>`;
            optionsHours.push(stringHour);
        }
    
        return optionsHours.join('\n');
    }  

    for (let i = 0; i < 60; i++) {
        let optionMinute = `<option value="${i}">${i < 10 ? '0' + i : i}</option>`;
        optionsMinutes.push(optionMinute);
    }

    return optionsMinutes.join('\n');
};

export const alarmSounds = `
<option value="alarm">Despertador</option>
<option value="siren">Sirena</option>
<option value="birds">Pajaros</option>
`;