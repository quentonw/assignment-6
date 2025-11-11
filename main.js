// toggle menu
const btn = document.getElementById('myBtn-alt');
const menu = document.getElementById('myDropdown-alt');

btn.addEventListener('click', function (e) {
  e.stopPropagation();
  menu.classList.toggle('show');
  menu.setAttribute('aria-hidden', !menu.classList.contains('show'));
});

// close when clicking outside
window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown-alt')) {
    menu.classList.remove('show');
    menu.setAttribute('aria-hidden', 'true');
  }
});

// Contact: replace the Contact link with a permanent mailto anchor the first time it's clicked
const contact = document.getElementById('demo-alt');
contact.addEventListener('click', function (e) {
  e.preventDefault();
  const email = 'quenton.whitecalf@edu.sait.ca';
  const a = document.createElement('a');
  a.href = 'mailto:' + email;
  a.id = 'demo-alt';
  a.textContent = email;
  a.style.display = 'block';
  // replace the original anchor in the menu so it remains clickable
  this.parentNode.replaceChild(a, this);
});
