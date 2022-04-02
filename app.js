const mobileBtn = document.getElementById('mobile-btn');
const mobileNav = document.getElementById('mobile-nav');

const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach((item) => {
  item.addEventListener('click', showNav);
});

// Open and close mobile nav
function showNav() {
  mobileNav.classList.toggle('hide');
  console.log('shownav');
}
mobileBtn.addEventListener('click', showNav);
