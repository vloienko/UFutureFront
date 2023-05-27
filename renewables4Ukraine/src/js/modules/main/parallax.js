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
