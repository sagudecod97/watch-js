export const modeTime = (time) => {
    const mode = window.localStorage.getItem('hours-mode');
    const twentyToTwelve = {
        "13": 1, "14": 2, "15": 3, "16":4, "17": 5, "18": 6,
        "19": 7, "20": 8, "21": 9, "22": 10, "23": 11, "24": 12
    }
    
    if (mode === 12) {
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