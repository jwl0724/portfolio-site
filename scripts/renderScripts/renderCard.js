// CARD_CONTENT FORMAT: projectName, projectGenre, projectImageStatic, projectImageGif, projectDescription

async function renderCard(cardObject, container) {
    // fetch template html
    let rawTemplate = await loadHTML('../../templates/card.html');

    // parse template string to DOM structure
    let parser = new DOMParser();
    let template = parser.parseFromString(rawTemplate, 'text/html').body;
    
    // set card parts as variables
    let cardTitle = template.querySelector('.cardTemplateTitle');
    let cardSubtitle = template.querySelector('.cardTemplateSubtitle');
    let cardDescription = template.querySelector('.cardTemplateDescription');
    let parentNode = template.querySelector('.cardTemplateLink');
    let cardDiv = template.querySelector('.cardTemplateDiv');
    let cardHeader = template.querySelector('.cardTemplateHeader');

    // input parameters
    cardTitle.innerHTML = cardObject.projectName;
    cardSubtitle.innerHTML = cardObject.projectGenre;
    cardDescription.innerHTML = cardObject.projectDescription;

    // create unique id for card
    cardDiv.id = cardObject.projectName;
    
    // set background image and width and height of div based on image
    let imgDimensions = await getImageDimensions(cardObject.projectImageStatic);
    if (imgDimensions != null) {
        parentNode.style.backgroundImage = `url(${cardObject.projectImageStatic})`;
        parentNode.style.width = imgDimensions.width;
        parentNode.style.height = imgDimensions.height;
    }

    // SECTION: initialize hover effects

    // hover effects for card description
    cardDescription.style.display = 'none';
    addHoverEffect(template.childNodes[0], cardDescription, cardObject, showDescription, hideDescription);

    // hover effects for background img to gif
    addHoverEffect(template.childNodes[0], parentNode, cardObject, showGif, showStatic);
    
    

    // hover effects for card image


    // append html element into container
    container.appendChild(template.childNodes[0]);
}