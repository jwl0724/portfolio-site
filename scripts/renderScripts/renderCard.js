// CARD_CONTENT FORMAT: projectName, projectGenre, projectImageStatic, projectImageGif, projectDescription

async function renderCard(cardContent, container) {
    // fetch template html
    let rawTemplate = await loadHTML('../../templates/card.html');

    // parse template string to DOM structure
    let parser = new DOMParser();
    let template = parser.parseFromString(rawTemplate, 'text/html').body;
    
    // input parameters
    template.querySelector('.cardTemplateTitle').innerHTML = cardContent[0];
    template.querySelector('.cardTemplateSubtitle').innerHTML = cardContent[1];
    template.querySelector('.cardTemplateDescription').innerHTML = cardContent[4];
    template.querySelector('.cardTemplateStaticImage').src = cardContent[2];
    template.querySelector('.cardTemplateDynamicImage').src = cardContent[3];

    // append to container
    container.innerHTML += template.outerHTML;
}