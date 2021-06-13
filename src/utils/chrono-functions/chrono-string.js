const chronoString = (timeObject, lap = true) => {
    let { hours, minutes, seconds, mili } = timeObject;

    if (parseInt(hours) < 10) {
        hours = String('0' + hours);
    }

    if (parseInt(minutes) < 10) {
        minutes = String('0' + minutes);
    }

    if (parseInt(seconds) < 10) {
        seconds = String('0' + seconds);
    }

    if (parseInt(mili) < 10) {
        mili = String('0' + mili).slice(0,2);
    }

    if (lap) {
        return `${hours}:${minutes}:${seconds}:${mili}`;
    } else {
        return { 
            time: `${hours}:${minutes}:${seconds}`, 
            miliseconds: mili
        };
    }
};

export default chronoString;
