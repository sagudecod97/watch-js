export const resetTimer = () => {
    let timerCountdown = document.getElementsByClassName('tempo_time')[0];
    timerCountdown.innerHTML = '00:00:00';

    window.timerConfig = {
        hours: '',
        minutes: '',
        seconds: '',
        sounds: '',
        nameTimer: '',
    };
};
