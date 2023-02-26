const body = document.querySelector('.body');
const menuButton = body.querySelector('.menu__btn');
menuButton.addEventListener('click', function(){
  body.classList.toggle('overflow-hidden');
})
