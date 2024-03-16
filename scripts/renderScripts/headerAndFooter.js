document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('header').innerHTML = await loadHTML('templates/headerTemplate.html');
    document.getElementById('footer').innerHTML = await loadHTML('templates/footerTemplate.html');
})