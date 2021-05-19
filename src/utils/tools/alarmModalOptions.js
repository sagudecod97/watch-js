'use strict'

export const alarmHours = (mode) => {
    let optionsTwelve = []

    if (mode == 12) {
        let flag = false;
        let amPM = 'AM';
        for (let i = 1; i <= 12; i++) {
            let stringHour = `<option value="${i}-${amPM.toLowerCase()}">${i < 10 ? '0' + i : i} ${amPM}</option>`;
            optionsTwelve.push(stringHour);

            if (!flag && i == 12) {
                i = 0;
                flag++;
                amPM = 'PM';
            }
        }

        return optionsTwelve.join('\n');
    }

    let optionsTwenty = [];

    for (let i = 0; i < 24; i++) {
        let stringHour = `<option value="${i}">${i < 10 ? '0' + i : i}</option>`;
        optionsTwenty.push(stringHour);
    }

    return optionsTwenty.join('\n')
};

export const alarmMinutes = () => {
    let optionsMinutes = [];

    for (let i = 1; i <= 60; i++) {
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
