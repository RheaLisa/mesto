

const popup = document.querySelector('.popup');
const openPopup = document.querySelector ('.popup-open');
const closePopup = document.querySelector ('.popup__close');

function togglePopup (){
  popup.classList.toggle('popup__opened')
}
openPopup.addEventListener ('click', togglePopup);
 
closePopup.addEventListener('click', togglePopup);

const heart = document.querySelector ('.element__heart');
const checkHeart = document.querySelector ('.check-heart');
checkHeart.addEventListener ('click', function (){
heart.classList.toggle ('element__heart_check')
})
