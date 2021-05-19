const AlarmCountTime = (time) => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    const mode = window.localStorage.getItem('hours-mode');

    let pHour;
    let pDate;

    const days = {
        "Mon": "Lunes", "Tue": "Martes", "Wed": "Miércoles", "Thu": "Jueves",
        "Fri": "Viernes", "Sat": "Sábado", "Sun": "Domingo",
    }
    const months = {
        "Jan": "Enero", "Feb": "Febrero", "Mar": "Marzo", "Apr": "Abril", "May": "Mayo", "Jun": "Junio",
        "Jul": "Julio", "Aug": "Agosto", "Sep": "Septiembre", "Oct": "Octubre", "Nov": "Noviembre",
        "Dec": "Diciembre",
    }

    const twentyToTwelve = {
        "13": 1, "14": 2, "15": 3, "16":4, "17": 5, "18": 6,
        "19": 7, "20": 8, "21": 9, "22": 10, "23": 11, "24": 12
    }

    const date = new Date().toDateString();
    const dayString = date.slice(0,3);
    const dayNumber = date.slice(8,10);
    const month = date.slice(4,7);
    const year = date.slice(11);

    if (minutes < 10) {
        minutes = '0' + minutes;
    } else if(seconds < 10) {
        seconds = '0' + seconds;
    }

    if (mode == 12) {
        if (hour < 12) {
            pHour = `${hour}: ${minutes}: ${seconds} am`;
        } else {
            hour = twentyToTwelve[hour];
            pHour = `${hour}: ${minutes}: ${seconds} pm`;
        }
    } else {
        pHour = `${hour}: ${minutes}: ${seconds}`;
    };

    pDate = `${days[dayString]}, ${dayNumber} de ${months[month]} de ${year}`;

    if (time) {
        return pHour;
    } else {
        return pDate;
    }
};

export default AlarmCountTime;