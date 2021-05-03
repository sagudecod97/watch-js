const IndexMain = () => {
    const view = `
    <p class="main_content-date">Sábado, 1 de Mayo de 2021</p>
    <p class="main_content-hour">18:34:15</p>

    <div class="main_content-options">
        <label class="main_content-options_opt">
            <input id="twelve" type="radio" />12 Horas
        </label>

        <div class="main_content-options_separator"></div>

        <label class="main_content-options_opt">
            <input id="twenty-four" type="radio" checked />24 Horas
        </label>
    </div>

    <div class="main_content-config">
        <button class="button">CONFIGURAR</button>
    </div>
    `;

    return view;
}

export default IndexMain;
