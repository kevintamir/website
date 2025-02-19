const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const menuOverlay = document.querySelector('.nav-overlay');

navToggle.addEventListener('click', () => menuOverlay.classList.add('show-overlay'));
navClose.addEventListener('click', () => menuOverlay.classList.remove('show-overlay'));