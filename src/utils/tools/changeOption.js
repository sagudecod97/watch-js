'use strict'

export const changeOption = (event, down, selectOptions) => {
    let currentOptIndex;
    let options = selectOptions.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].selected)
            currentOptIndex = i;
    };
    
    if (down) {
        if (currentOptIndex === 0) { return; };
        options[currentOptIndex - 1].selected = true;
    } else {
        if (currentOptIndex === (options.length - 1)) { return; };

        options[currentOptIndex + 1].selected = true;
    }
};
 