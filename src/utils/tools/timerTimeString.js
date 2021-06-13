export const timerTimeString = (hours, minutes, seconds) => {
    if (String(hours).length === 1)
        hours = '0' + hours;

    if (String(minutes).length === 1)
        minutes = '0' + minutes;

    if (String(seconds).length === 1)
        seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
};
