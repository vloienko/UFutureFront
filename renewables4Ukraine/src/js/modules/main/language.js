// const languageAreas = document.querySelectorAll('.header__language-block');
// const boxLanguages = document.querySelectorAll('.header__language-box');
// const languageLists = document.querySelectorAll('.header__language-list');
// const languageItems = document.querySelectorAll('.header__language-item');

// // loop through all language blocks
// languageAreas.forEach((languagesArea, index) => {
//    let selectedLanguage = 'EN';
//    let languageBox = boxLanguages[index];

//    // set initial language for each box
//    languageBox.textContent = selectedLanguage;

//    // update selected language and active class on click
//    languageItems.forEach(item => {
//       item.addEventListener('click', () => {
//          selectedLanguage = item.getAttribute('data-lang');
//          languageBox.textContent = selectedLanguage;
//          languageLists[index].classList.remove('active');
//          updateLanguageList(index);
//       });
//    });

//    // update language list to show only unselected language
//    function updateLanguageList(index) {
//       languageItems.forEach(item => {
//          if (item.getAttribute('data-lang') !== selectedLanguage) {
//             item.style.display = 'block';
//          } else {
//             item.style.display = 'none';
//          }
//       });
//    }

//    // show/hide language list on button click
//    languagesArea.addEventListener('click', () => {
//       languageLists[index].classList.toggle('active');
//       updateLanguageList(index);
//    });
// });

