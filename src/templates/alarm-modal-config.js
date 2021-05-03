const AlarmModalConfig = () => {
    const view = `
    <div class="alarm-container_modal">
        <div class="alarm-container_modal-head">
            <h3>Configurar Alarma</h3>
            <span class="icon-close"></span>
        </div>

        <div class="alarm-container_modal-config">
            <p class="alarm-container_modal-config_p">Horas:</p>
            <div class="alarm-container_modal-config_opt">
                <span class="alarm-container_modal-config_opt-up icon-chevron-up"></span>
                <select id="alarm-hours">
                    <option value="1 AM">1 AM</option>
                </select>
                <div class="alarm-container_modal-config_opt-down icon-chevron-down"></div>
            </div>

            <p class="alarm-container_modal-config_p">Minutos:</p>
            <div class="alarm-container_modal-config_opt">
                <span class="alarm-container_modal-config_opt-up icon-chevron-up"></span>
                <select id="alarm-minutes">
                    <option value="15">15</option>
                </select>
                <div class="alarm-container_modal-config_opt-down icon-chevron-down"></div>
            </div>

            <p class="alarm-container_modal-config_p">Sonido:</p>
            <div class="alarm-container_modal-config_opt" id="sound-container">
                <select id="sounds">
                    <option value="sirena">Sirena</option>
                </select>
                <span class="icon-folder-upload"></span>
            </div>

            <div class="alarm-container_modal-config_title">
                <p class="alarm-container_modal-config_title-name">Nombre alarma:</p>
                <input class="alarm-container_modal-config_title-input" type="Llamar a..." >
            </div>

            <div class="alarm-container_modal-config_buttons">
                <button class="button-blank"><u>Probar</u></button>
                <button class="button-blank">Cancelar</button>
                <button class="button">Iniciar</button>
            </div>
        </div>
    </div>
    `;

    return view;
};

export default AlarmModalConfig;
