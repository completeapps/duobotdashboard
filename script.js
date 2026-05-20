const menuToggle = document.getElementById('menuToggle');
const sideNav = document.getElementById('sideNav');
const sideNavClose = document.getElementById('sideNavClose');
const sideNavBackdrop = document.getElementById('sideNavBackdrop');

function openNav() {
  sideNav.classList.add('open');
  sideNavBackdrop.classList.add('visible');
}

function closeNav() {
  sideNav.classList.remove('open');
  sideNavBackdrop.classList.remove('visible');
}

menuToggle.addEventListener('click', openNav);
sideNavClose.addEventListener('click', closeNav);
sideNavBackdrop.addEventListener('click', closeNav);
