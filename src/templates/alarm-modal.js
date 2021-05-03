const AlarmModal = () => {
    const view = `
    <div class="alarm">
            <div class="alarm_head">
                <h3 class="alarm_head-title">Alarma</h3>
                <p class="icon-close alarm_head-close"></p>
            </div>

            <div class="alarm_body">
                <p class="icon-watch_later alarm_body-icon"></p>
                <p class="alarm_body-name">Titulo Alarma</p>
                <p class="alarm_body-hour">18:45</p>

                <div class="alarm_body-btn">
                    <button class="button button alarm_body-btn_button">Aceptar</button>
                </div>
            </div>
        </div>
    `;

    return view;
}

export default AlarmModal;
