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
    
    // create unique id for card
    let templateDiv = template.querySelector('.cardTemplateLink');
    templateDiv.id = cardContent[0];
    
    // set background image and width and height of div based on image
    let imgDimensions = await getImageDimensions(cardContent[2]);
    if (imgDimensions != null) {
        templateDiv.style.backgroundImage = `url(${cardContent[2]})`;
        templateDiv.style.width = imgDimensions.width;
        templateDiv.style.height = imgDimensions.height;
    }

    // TODO: add hover effect where image is replaced with gif when hovered over

    // append to container
    container.innerHTML += template.outerHTML;
}