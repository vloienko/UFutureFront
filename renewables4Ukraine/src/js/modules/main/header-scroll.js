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