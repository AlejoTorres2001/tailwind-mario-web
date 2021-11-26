const menuButton = document.querySelector('#mobile-menu');
menuButton.addEventListener('click', function(e) {
  const menu = document.querySelector('.mobile-links');
  menu.classList.toggle('hidden');
});