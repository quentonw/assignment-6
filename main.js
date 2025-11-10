document.getElementById("myBtn-alt").addEventListener("click", toggleDropdownAlt);

function toggleDropdownAlt() {
  document.getElementById("myDropdown-alt").classList.toggle("show-alt");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-alt')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-alt");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-alt')) {
        openDropdown.classList.remove('show-alt');
      }
    }
  }
}
