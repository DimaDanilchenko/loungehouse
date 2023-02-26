const body = document.querySelector('.body');
const menuButton = body.querySelector('.hamburger-menu');
menuButton.addEventListener('click', function(){
  body.classList.toggle('overflow-hidden');
})
