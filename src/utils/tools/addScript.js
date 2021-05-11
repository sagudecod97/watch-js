'use strict'

const addScript = (src) => {
    let scripts = document.getElementsByTagName('script');
    let routeIndex = '/index.js'
    
    for (let i = 0; i < scripts.length; i++) {
        // Erase second validation for PRD
        if ((!scripts[i].src.includes(routeIndex)) && (scripts[i].src.length > 0)) {
            scripts[i].remove();
        }
    };

    let script = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    script.setAttribute('src', src);
    script.setAttribute('type', 'module');
    script.defer = true;

    document.addEventListener('load', () => {
        alert("Loaded")
    })

    head.appendChild(script);
};

export default addScript;
