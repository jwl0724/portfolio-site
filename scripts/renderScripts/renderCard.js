// CARD_CONTENT FORMAT: projectName, projectGenre, projectImageStatic, projectImageGif, projectDescription

async function renderCard(cardObject, container) {
    // fetch template html
    let rawTemplate = await loadHTML('../../templates/card.html');

    // parse template string to DOM structure
    let parser = new DOMParser();
    let template = parser.parseFromString(rawTemplate, 'text/html').body;
    
    // input parameters
    template.querySelector('.cardTemplateTitle').innerHTML = cardObject.projectName;
    template.querySelector('.cardTemplateSubtitle').innerHTML = cardObject.projectGenre;
    template.querySelector('.cardTemplateDescription').innerHTML = cardObject.projectDescription;
    
    // create unique id for card
    let templateDiv = template.querySelector('.cardTemplateLink');
    templateDiv.id = cardObject.projectName;
    
    // set background image and width and height of div based on image
    let imgDimensions = await getImageDimensions(cardObject.projectImageStatic);
    if (imgDimensions != null) {
        templateDiv.style.backgroundImage = `url(${cardObject.projectImageStatic})`;
        templateDiv.style.width = imgDimensions.width;
        templateDiv.style.height = imgDimensions.height;
    }

    // TODO: add hover effect where image is replaced with gif when hovered over

    // append to container
    container.innerHTML += template.outerHTML;
}