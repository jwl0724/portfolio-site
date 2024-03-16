async function loadHTML(filepath) {
    content = await fetch(filepath);
    return content.text();
} 
