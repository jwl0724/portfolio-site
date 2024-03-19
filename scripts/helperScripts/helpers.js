async function loadHTML(filepath) {
    content = await fetch(filepath);
    return content.text();
} 

function fadeOut(element, endState, spd) {
    if (endState != "hidden" && endState != "none") {
        return;
    }
    element.style.opacity = 1;
    (function fade() {
        let opacityVal = parseFloat(element.style.opacity);
        if ((opacityVal -= spd) > 0) {
            element.style.opacity = opacityVal;
            requestAnimationFrame(fade);
        } else {
            if (endState === "hidden") {
                element.style.visibility = endState;
            } else if (endState === "none") {
                element.style.display = endState;
            }
        }
    })();
}

function fadeIn(element, endState, spd) {
    element.style.opacity = 0;
    if (endState === "visible") {
        element.style.visibility = endState;
    } else if (endState === "block") {
        element.style.display = endState;
    } else {
        return
    }

    (function fade() {
        let opacityVal = parseFloat(element.style.opacity);
        if ((opacityVal += spd) < 1) {
            element.style.opacity = opacityVal;
            requestAnimationFrame(fade);
        }
    })();
}

async function getImageDimensions(filepath) {
    return new Promise((resolve) => {
        let img = new Image();

        img.onload = () => {
            resolve({width: img.width, height: img.height});
        }
        img.onerror = () => {
            resolve(null);
        }
        img.src = filepath;
    })
}