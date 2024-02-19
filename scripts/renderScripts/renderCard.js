// CARD_CONTENT FORMAT: projectName, projectGenre, projectImageStatic, projectImageGif, projectDescription

async function renderCard(cardContent, container) {
    // load html template into variable
    $.get('./templates/card.html', (rawContent) => {
        // format string response into JS object
        let content = $('<div />', {html:rawContent});

        // modify template to show passed in content
        console.log(cardContent[6]);
        $(content).find('.cardTemplateTitle').html(cardContent[0]);
        $(content).find('.cardTemplateSubtitle').html(cardContent[1]);
        $(content).find('.cardTemplateDescription').html(cardContent[4]);
        $(content).find('.cardTemplateStaticImage').attr("src", cardContent[2])
        $(content).find('.cardTemplateDynamicImage').attr("src", cardContent[3]);
        container.innerHTML = content.html();
    });
}