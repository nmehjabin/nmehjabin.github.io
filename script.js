// Grab the button and the nav links container
const toggleButton = document.querySelector('#nav-toggle');
const navLinks = document.querySelector('#nav-links');

// When the button is clicked, toggle the 'open' class on the nav links
toggleButton.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});
