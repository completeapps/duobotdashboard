const menuToggle = document.getElementById('menuToggle');
const sideNav = document.getElementById('sideNav');
const sideNavClose = document.getElementById('sideNavClose');
const sideNavBackdrop = document.getElementById('sideNavBackdrop');

function openNav() {
  sideNav.classList.add('open');
  sideNavBackdrop.classList.add('visible');
  menuToggle.classList.add('open');
}

function closeNav() {
  sideNav.classList.remove('open');
  sideNavBackdrop.classList.remove('visible');
  menuToggle.classList.remove('open');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    if (sideNav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });
}

if (sideNavClose) {
  sideNavClose.addEventListener('click', closeNav);
}

if (sideNavBackdrop) {
  sideNavBackdrop.addEventListener('click', closeNav);
}

// Groups dropdown
const groupToggle = document.querySelector('.nav-group-toggle');
const groupMenu = document.querySelector('.nav-group-menu');

if (groupToggle && groupMenu) {
  groupToggle.addEventListener('click', () => {
    groupMenu.classList.toggle('open');
  });
}

// Active link based on body data-page
const pageKey = document.body.dataset.page;
const navLinks = document.querySelectorAll('.side-nav-links a[data-nav]');
navLinks.forEach(link => {
  if (link.dataset.nav === pageKey) {
    link.classList.add('active');
  }
});
