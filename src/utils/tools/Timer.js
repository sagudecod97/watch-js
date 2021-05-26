import { timerTimeString } from '../tools/timerTimeString.js';
import { createSoundAlarm } from '../tools/createSoundAlarm.js';
 
class Timer {

    createIntervalTimer() {
        let newInterval = setInterval(this.createTimer, 1000, this.mode, this.elem);
        return newInterval;
    }

    createTimer() {
        let { hours, minutes, seconds, sounds, nameTimer} = window.timerConfig;
        let timerId = window.timer.id;
        let timerMain = document.getElementsByClassName('tempo_time')[0];

        let timerDoneModal = document.getElementsByClassName('timer-container_done')[0];
        let timerDoneName = document.getElementsByClassName('tempo-done_name')[0];
        let timerDoneTime = document.getElementsByClassName('tempo-done_timer')[0];

        if (hours == 0 && minutes == 0 && seconds == 0) {
            let hourReset = window.timerReset;
            createSoundAlarm(sounds);
            timerDoneName.innerHTML = nameTimer;
            timerDoneTime.innerHTML = timerTimeString(hourReset.hours, hourReset.minutes, hourReset.seconds);
            timerDoneModal.classList.remove('not-show');
            return clearInterval(timerId);
        };

        if (minutes != 0 && seconds == 0 ) {
            seconds = 59;
            minutes--;

            if (hours != 0 &&  minutes === 0) {
                hours--;
                minutes = 59;
            }
        } else {
            seconds--;
        }

        let newTimer = {
            hours, seconds, minutes, sounds, nameTimer
        };

        timerMain.innerHTML = timerTimeString(hours, minutes, seconds);
        window.timerConfig = newTimer;
    }
};

export default Timer;
