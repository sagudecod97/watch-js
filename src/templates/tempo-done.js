const TempoDone = () => {
    const view = `
    <div class="tempo-done">
        <div class="tempo-done_head">
            <h3 class="tempo-done_head-title">Temporizador</h3>

            <p class="tempo-done_head-icon icon-close"></p>
        </div>

        <p class="tempo-done_icon icon-stopwatch"></p>
        <p class="tempo-done_name">Nombre alarma</p>
        <p class="tempo-done_timer">00:00:08</p>

        <button class="tempo-done_btn button">Aceptar</button>
    </div>
    `;

    return view;
}

export default TempoDone;
