// SECTION: Hover Effects

function showDescription(element) {
    fadeIn(element, "block", 0.05);
}

function hideDescription(element) {
    fadeOut(element, "none", 0.05);
}

function showGif(element, cardObject) {
    console.log(cardObject);
    if (cardObject.projectImageGif !== null) {
        element.style.backgroundImage = `url(${cardObject.projectImageGif})`;
    }
}

function showStatic(element, cardObject) {
    element.style.backgroundImage = `url(${cardObject.projectImageStatic})`;
}

// SECTION: Hover Effect Helpers

function addHoverEffect(parentNode, childNode, cardObject, enterEffect, leaveEffect) {
    parentNode.addEventListener('mouseenter', () => {
        enterEffect(childNode, cardObject);
    });
    parentNode.addEventListener('mouseleave', () => {
        leaveEffect(childNode, cardObject);
    });
}