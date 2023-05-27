// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {

   menuBody.addEventListener("click", e => {
      if (e.target.classList.contains('menu__body')) {
         menuBody.classList.remove('_active');
         iconMenu.classList.remove('_active');
         document.body.classList.remove('_lock');
      }
   });


   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });

   document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
         if (menuBody.classList.contains('_active')) {
            menuBody.classList.remove('_active');
            iconMenu.classList.remove('_active');
            document.body.classList.remove('_lock');
         }
      }
   });

   const donateButton = document.querySelector('.menu__donnate');
   if (donateButton) {
      donateButton.addEventListener('click', function () {
         if (menuBody.classList.contains('_active')) {
            menuBody.classList.remove('_active');
            iconMenu.classList.remove('_active');
            document.body.classList.remove('_lock');
         }
      });
   }

}
// Прокрутка при кліку 
const menuLinks = document.querySelectorAll('.data-goto[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset; // Прибрав відняття шапки, так як вона прозора

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}


// Отримуємо необхідні елементи
const header = document.querySelector('header');
const changeSections = document.querySelectorAll('.change');
const whiteSections = document.querySelectorAll('.white');

// Функція, яка перевіряє, чи перехрещується шапка з елементом з класом "change"
function checkIntersection() {
   // Отримуємо розміри та позиції шапки
   const headerRect = header.getBoundingClientRect();
   const headerTop = headerRect.top;
   const headerBottom = headerRect.bottom;

   // Ітеруємося по елементах з класом "change"
   changeSections.forEach((section) => {
      // Отримуємо розміри та позиції поточного елемента з класом "change"
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      // Перевіряємо, чи перехрещується шапка з поточним елементом з класом "change"
      if (headerBottom >= sectionTop && headerTop <= sectionBottom) {
         header.classList.add('active');
         return;
      }
   });

   // Ітеруємося по елементах з класом "white"
   whiteSections.forEach((section) => {
      // Отримуємо розміри та позиції поточного елемента з класом "white"
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      // Перевіряємо, чи перехрещується шапка з поточним елементом з класом "white"
      if (headerBottom >= sectionTop && headerTop <= sectionBottom) {
         header.classList.remove('active');
         return;
      }
   });
}

// Викликаємо функцію checkIntersection() при прокрутці сторінки
window.addEventListener('scroll', checkIntersection);


let parallaxElements = document.querySelectorAll('.parallax');

document.onmousemove = (e) => {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;

   parallaxElements.forEach((el) => {
      el.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
   });
};



window.onload = function () {
   const parallax = document.querySelector('.parallax-clouds');


   if (parallax) {
      const content = document.querySelector('.contact-form__wrapper');
      const clouds = document.querySelector('.contact-form__parallax-clouds');
      const mountains = document.querySelector('.contact-form__parallax-bg');

      const forClouds = 40;
      const forMountains = 0;

      const speed = 0.085;

      let positionX = 0, positionY = 0;
      let coordXprocent = 0, coordYprocent = 0;

      function setMouseParallaxStyle() {
         const distX = coordXprocent - positionX;
         const distY = coordYprocent - positionY;

         positionX = positionX + (distX * speed);
         positionY = positionY + (distY * speed);

         clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
         mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;

         requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function (e) {

         const parallaxWidth = parallax.offsetWidth;
         const parallaxHeight = parallax.offsetHeight;

         const coordX = e.pageX - parallaxWidth / 2;
         const coordY = e.pageY - parallaxHeight / 2;

         coordXprocent = coordX / parallaxWidth * 100;
         coordYprocent = coordY / parallaxHeight * 100;
      });
   }
}


const swiperNews = new Swiper('.news__swiper', {
   spaceBetween: 50,
   breakpoints: {
      320: {
         slidesPerView: 1.125,
         spaceBetween: 20,
      },
      631: {
         slidesPerView: 2.15,
         spaceBetween: 30,
      },
      1025: {
         slidesPerView: 3,
         spaceBetween: 50,
      }
   },
});



const swiperForm = new Swiper('.contact-form__swiper', {

   navigation: {
      nextEl: '.doc-next',
      prevEl: '.doc-prev',
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      521: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      769: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1025: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
      1151: {
         slidesPerView: 4,
         spaceBetween: 88,
      }
   },
});


const popupLinks = document.querySelectorAll('.popup-link'); // Відкривається при кліку на будь-який об'єкт з заданим класом
const body = document.querySelector('body'); // Для того, щоб заблокувати скрол для body
const lockPadding = document.querySelectorAll('.lock-padding'); // Потрібен для нормальної роботи блокувальника скрола

let unlock = true;

const timeout = 600; // Повинно збігатись з заданим transition в css в (мс)

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup'); // Додати клас елементу, який буде закривати поп-ап
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
         if (!e.target.closest('.popup__content')) { // Замінити на будь-який інший потрібний клас
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('_lock'); // Прописати цей клас в css

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock'); // Прописати цей клас в css
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});

const popupBtn = document.querySelector('.popup__btn');
if (popupBtn) {
   popupBtn.addEventListener('click', function (e) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
      e.preventDefault();
   });
}

(function () {
   // Перевіряємо підтримку
   if (!Element.prototype.closest) {
      // Реалізуємо
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   // Перевіряємо підтримку
   if (!Element.prototype.matches) {
      // Визначаємо властивість
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})(); 


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