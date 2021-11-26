const menuButton = document.querySelector('#mobile-menu');
menuButton.addEventListener('click', function(e) {
  console.log(menuButton);
  const menu = document.querySelector('.mobile-links');
  menu.classList.toggle('opacity-0');
  const links = document.querySelectorAll('.mobile-link');
  links.forEach(link => {
    link.classList.toggle('hidden');
  })
});