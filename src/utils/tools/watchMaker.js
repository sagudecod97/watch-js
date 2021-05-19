export class WatchMaker {
    intervals = [];

    constructor(elem, mode) {
        this.elem = elem;
        this.mode = mode;
    };

    /*transformHour(hours, minutes) {
        let pmHours = {
            1: 13, 2: 14, 3: 15, 4: 16, 5: 17, 6: 18,
            7: 19, 8: 20, 9: 21, 10: 22, 11: 23, 12: "00",
        }

        if (hours.includes("am")) {
            hours = hours.split('-')[0];
        } else if (hours.includes("pm")) {
            hours = pmHours[hours.split("-")[0]];
        }

        return `${hours}:${minutes}`;
    }*/

    createIntervalWatch() {
        let newInterval = setInterval(this['createAlarm'], 1000, this.mode, this.elem);
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

    createAlarm(mode, elem) {
        let currentHour = new Date().getHours();
        let currentMinutes = new Date().getMinutes();
        let currentSeconds = new Date().getSeconds();
        let currentInterval = window.alarmWatch.watch;
        let idCurrentInterval = window.alarmWatch.id;

        let tryAlarm = document.getElementsByClassName('alarm-try')[0];
        let mainContent = document.getElementsByClassName('--main-content')[0];
        let alarmCount = document.getElementsByClassName('alarm-count')[0];

        let { hours, minutes } = window.currentAlarm;

        let pmHours = {
            1: 13, 2: 14, 3: 15, 4: 16, 5: 17, 6: 18,
            7: 19, 8: 20, 9: 21, 10: 22, 11: 23, 12: "00",
        }

        if (hours.includes("am")) {
            hours = hours.split('-')[0];
        } else if (hours.includes("pm")) {
            hours = pmHours[hours.split("-")[0]];
        }

        if (`${hours}:${minutes}` == `${currentHour}:${currentMinutes}`) {
            if (typeof currentInterval !== 'undefined') {
                currentInterval.clearOne(idCurrentInterval);
                tryAlarm.classList.remove('not-show');
                mainContent.classList.remove('not-show');
                alarmCount.classList.add('not-show');
            }
        }    


        const twentyToTwelve = {
            "13": 1, "14": 2, "15": 3, "16": 4, "17": 5, "18": 6,
            "19": 7, "20": 8, "21": 9, "22": 10, "23": 11, "24": 12
        }

        if (currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes;
        } else if(currentSeconds < 10) {
            currentSeconds = '0' + currentSeconds;
        }
        
        if (mode == 12) {
            if (currentHour < 12) {
                elem.innerHTML = `${currentHour}: ${currentMinutes}: ${currentSeconds} am`;
            } else {
                currentHour = twentyToTwelve[currentHour];
                elem.innerHTML = `${currentHour}: ${currentMinutes}: ${currentSeconds} pm`;
            }
        } else {
            elem.innerHTML = `${currentHour}: ${currentMinutes}: ${currentSeconds}`;
        };
    }
}
