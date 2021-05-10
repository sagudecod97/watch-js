const ChronoLaps = () => {
    const view = `
    <div class="chrono-laps">
        <div class="chrono-laps_titles">
            <p class="chrono-laps_titles-lap">Vuelta</p>
            <p class="chrono-laps_titles-hour">Hora</p>
            <p class="chrono-laps_titles-total">Tiempo total</p>
        </div>

        <div class="chrono-laps_time">
            
        </div>
    </div>
    `;

    return view;
};

const ChronoLap = () => {
    const view = `
    <div class="chrono-laps_time-lap">
        <p>1</p>
        <p>01:07:02.30</p>
        <p>01:22:02.65</p>
    </div>
    `;

    return view;
};

const Chrono = () => {
    const view = `
    <div class="chrono">
        <p class="chrono_time">16:12<span class="chrono_time-ms">.25</span></p>

        <div class="chrono_btns">
            <button class="button-blank chrono_btns-lap"><u>Vuelta</u></button>
            <button class="button">Parar</button>
        </div>
    </div>
    `;
  
    return view;
};

export default {
    Chrono, ChronoLaps, ChronoLap
};
