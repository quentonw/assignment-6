@media screen and (max-width: 570px) {
    button {
        display: block;
    }
  
    nav {
       /* display: none; */
       position: absolute;
       top: 100%;
       right: 0;
       z-index: 100;
       background-color: #333;
       /* width: 100%; */
    }
  
    nav ul {
        flex-direction: column;
        gap: 10px;
    }
  
    nav.active {
        display: block;
    }
}

var navContainer = document.getElelemntById("menu");
var btn = document.getElementById("toggle");
function toggleMenu() {
    navContainer.classList.toggle('activate');
}

btn.addEventListener('click', toggleMenu);

main.mainContent {
    height: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
