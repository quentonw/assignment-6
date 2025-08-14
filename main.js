var navContainer = document.getElelemntById("menu");
var btn = document.getElementById("toggle");
function toggleMenu() {
    navContainer.classList.toggle('activate');
}

btn.addEventListener('click', toggleMenu);

const exploreBtn = document.getElementById('exploreMoreBtn');
exploreBtn.addEventListener('click', scrollToMain);

