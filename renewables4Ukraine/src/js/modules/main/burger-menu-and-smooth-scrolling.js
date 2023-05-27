// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu) {

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