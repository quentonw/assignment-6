function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("demo").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "quenton.whitecalf@edu.sait.ca";
});

// For the about page
if (document.getElementById("myBtn-alt")) {
  document.getElementById("myBtn-alt").addEventListener("click", toggleDropdownAlt);
}

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
