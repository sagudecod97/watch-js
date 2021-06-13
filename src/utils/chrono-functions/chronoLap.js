const ChronoLap = (lap, totalTime) => {
    let { hours, minutes, seconds, mili } = totalTime;

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

    const view = `
    <div class="chrono-laps_time-lap">
        <p>${lap}</p>
        <p>${hours}:${minutes}:${seconds}:${String(mili).slice(0,2)}</p>
        <p>${hours}:${minutes}:${seconds}:${String(mili).slice(0,2)}</p>
    </div>
    `;

    let divLap = document.createElement('div');
    divLap.innerHTML = view;

    return divLap;
};

export default ChronoLap;
