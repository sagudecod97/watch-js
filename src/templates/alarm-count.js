const AlarmCount = () => {
    const view = `
    <div class="alarm-count">
        <p class="alarm-count_hour">19:15:07</p>
        <p class="alarm-count_date">Domingo, 2 de mayo de 2021</p>

        <div class="alarm-count_separator"></div>

        <p class="alarm-count_title">Alarma</p>

        <p class="alarm-count_alarm">21:09</p>
        <p class="icon-alarm alarm-count_icon-alarm"></p>

        <p class="alarm-count_temp">01:01:26</p>
        <p class="icon-stopwatch alarm-count_icon-stop"></p>

        <button class="button alarm-count_btn">Desactivar</button>
    </div>
    `;

    return view;
}

export default AlarmCount;
