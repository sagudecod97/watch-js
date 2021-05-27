export const createSoundAlarm = (sound) => {
    let soundsNames = {
        'alarm': 'alarm-sound.mp3', 'siren': 'siren-sound.mp3', 'birds': 'birds-sound.mp3'
    }       

    let alarmAudio = new Audio(`assets/sounds/${soundsNames[sound]}`);
    window.alarmAudio = alarmAudio;

    alarmAudio.addEventListener("canplaythrough", () => {
        alarmAudio.play();
    })
};
