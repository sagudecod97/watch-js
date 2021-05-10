const Watches = () => {
    const view = `
    <div class="watches">
        <div class="watches_up">
        </div>

        <div class="watches_down">
        </div>
    </div>
    `;

    return view;
}; 

const WatchCard = () => {
    const view = `
    <div class="watch-card">
        <div class="watch-card_country">
            <p class="watch-card_country-name">España</p>
        </div>

        <p class="watch-card_hour">3:59:39</p>
        <p class="watch-card_diff">Mañana, +7 H</p>
    </div>
    `;

    return view;
};

const WatchesWatch = () => {
    const view = `
    <div class="watches-watch">
        <p class="watches-watch_date">Domingo, 9 de mayo de 2021</p>
        <h3 class="watches-watch_hour">21:24:15</h3>
    </div>
    `;

    return view;
}

export default {
    Watches, WatchCard, WatchesWatch
};
