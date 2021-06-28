export const resetTimer = () => {
    let timerCountdown = document.getElementsByClassName('tempo_time')[0];
    let tempo = document.getElementsByClassName('tempo_buttons-start')[0];
    timerCountdown.innerHTML = '00:00:00';

    window.timerConfig = {
        hours: '',
        minutes: '',
        seconds: '',
        sounds: '',
        nameTimer: '',
    };

    if (tempo.innerHTML === 'Parar') {
       tempo.innerHTML = 'Iniciar';
        tempo.classList.remove('stop-button');
    }

    if (window.timer)
        clearInterval(window.timer.id);

    window.timer = null;
};
