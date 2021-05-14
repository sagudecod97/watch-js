const getHours = (mode, elem) => {
    let currentHour = new Date().getHours();
    let currentMinutes = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();

    return `${currentHour}: ${currentMinutes}: ${currentSeconds}`
}

export class WatchMaker {
    intervals = [];

    constructor(elem, mode) {
        this.elem = elem;
        this.mode = mode;
    };

    createInterval(func) {
        let newInterval = setInterval(func, 1000, this.mode, this.elem);
        this.intervals.push(newInterval);
        return newInterval;
    }

    clearOne(idInterval) {
        this.intervals.splice(this.intervals.indexOf(idInterval), 1);
        return clearInterval(idInterval);
    }

    clearAll() {
        this.intervals.forEach(elem => clearInterval(elem));
    }
}
