const mobileBtn = document.getElementById('mobile-btn');
const mobileNav = document.getElementById('mobile-nav');

const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach((item) => {
  item.addEventListener('click', closeMobileNav);
});

// Open and close mobile nav
function closeMobileNav() {
  mobileNav.classList.toggle('hidden');
}
mobileBtn.addEventListener('click', closeMobileNav);
