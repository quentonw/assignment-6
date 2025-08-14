var navContainer = document.getElelemntById("menu");
var btn = document.getElementById("toggle");
function toggleMenu() {
    navContainer.classList.toggle('activate');
}

btn.addEventListener('click', toggleMenu);

const exploreBtn = document.getElementById('exploreMoreBtn');
exploreBtn.addEventListener('click', scrollToMain);

GOOGLE_MAPS_API_KEY=<your API key here>

