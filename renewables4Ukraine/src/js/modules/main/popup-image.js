document.querySelectorAll('.contact-form__swiper-images').forEach(img => {
   img.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = img.getAttribute('src');
      document.body.classList.add('_lock');
   }
});

document.querySelector('.popup-image svg').onclick = () => {
   closePopupImage();
};

document.addEventListener('click', (event) => {
   const popupImage = document.querySelector('.popup-image');
   const isClickInsidePopupImage = popupImage.contains(event.target);
   if (isClickInsidePopupImage && popupImage.style.display === 'block') {
      closePopupImage();
   }
});

function closePopupImage() {
   document.querySelector('.popup-image').style.display = 'none';
   document.body.classList.remove('_lock');
};