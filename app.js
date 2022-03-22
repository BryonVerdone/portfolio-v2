const mobileBtn = document.getElementById('mobile-btn');
const mobileNav = document.getElementById('mobile-nav');

mobileBtn.addEventListener('click', function () {
  mobileNav.classList.toggle('hidden');
  console.log('clicked');
});
