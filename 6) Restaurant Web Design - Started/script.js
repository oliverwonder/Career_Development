document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const headerMenus = document.querySelector(".header__menus");

  menuToggle.addEventListener("click", () => {
    headerMenus.classList.toggle("active");
    menuToggle.querySelector(".bx-menu").classList.toggle("hidden");
    menuToggle.querySelector(".bx-x").classList.toggle("hidden");
  });
});
//COMPONENTS
ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.section-desc',{
  delay: 600,
  duration: 2500,
});
//END COMPONENTS

//SECTION HOME
ScrollReveal({
  reset: true,
  delay: 300,
  distance: '60px',
  duration: 1500,
});

ScrollReveal().reveal('.section-home__image');
ScrollReveal().reveal('.section-home__title', { 
  origin: 'right'
});
ScrollReveal().reveal('.section-home__buttons', {
  origin: 'bottom',
  delay: 600,
  distance: '30px',
});

//SECTION MENUS
ScrollReveal().reveal('.section-menus__card', { 
  interval: 300,
});
ScrollReveal().reveal('.section-menus__desc', {
  delay: 600,
  duration: 2500,
});

//SECTION ABOUT
ScrollReveal().reveal('.section-about__image');
ScrollReveal().reveal('.section-about__title');
ScrollReveal().reveal('.section-about__desc', { 
  delay: 600,
  origin: 'left',
});
ScrollReveal().reveal('.section-about__stat', { 
  delay: 900,
  interval: 300,
});
ScrollReveal().reveal('.section-about .primary-button', { 
  duration: 3000,
  delay: 1200,
});

//SECTION SERVICES
ScrollReveal().reveal('.section-services__card', { 
  interval: 300,
  delay: 1200,
  origin: 'bottom',
});

//SECTION CONTACT
ScrollReveal().reveal('.section-contact__info-item', {
  interval: 300,
  delay: 1200,
  origin: 'bottom',
});
ScrollReveal().reveal('.section-contact__form', {
  delay: 600,
  duration: 2500,
});