const TempoConfig = () => {
    const view = `
    <div class="tempo-config">
        <div class="tempo-config_head">
            <h3 class="tempo-config_head-title">Temporizador</h3>
            <span class="tempo-config_head-icon icon-close"></span>
        </div>

        <div class="tempo-config_body">
            <p class="tempo-config_body-title hours-cfg">Horas</p>
            <p class="icon-chevron-up"></p>
            <select class="tempo-config_body-select"  id="config-hours">
                <option value="00">00</option>
            </select>
            <p class="icon-chevron-down"></p>

            <p class="tempo-config_body-title minutes-cfg">Minutos</p>
            <p class="icon-chevron-up"></p>
            <select class="tempo-config_body-select"  id="config-seconds">
                <option value="10">10</option>
            </select>
            <p class="icon-chevron-down"></p>

            <p class="tempo-config_body-title seconds-cfg">Segundos</p>
            <p class="icon-chevron-up"></p>
            <select class="tempo-config_body-select"  id="config-seconds">
                <option value="8">8</option>
            </select>
            <p class="icon-chevron-down"></p>

            <p class="tempo-config_body-title --bigger-title">En Cero</p>

            <input type="radio" id="stop-tempo">
            <label class="tempo-config_body-title --medium-title" for="stop-tempo">
                Parar temporizador
            </label>

            <input type="radio" id="reset-tempo">
            <label class="tempo-config_body-title --medium-title" for="reset-tempo">
                Reiniciar temporizador
            </label>

            <p class="tempo-config_body-title --bigger-title">Sonido</p>
            <input type="file" class="tempo-config_body-sound" />
            <select id="config-sounds">
                <option value="trompet">Trompeta</option>
            </select>
            <p class="icon-folder-upload"></p>
            
            <p class="tempo-config_body-title --bigger-title">Título</p>
            <input class="tempo-config_body-name" type="text" placeholder="Recordar...">

            <div class="tempo-config_body-buttons">
                <button class="button-blank --btn-left"><u>Probar</u></button>
                <button class="button-blank">Cancelar</button>
                <button class="button">Iniciar</button>
            </div>
        </div>
    </div>
    `;

    return view;
}

export default TempoConfig;
