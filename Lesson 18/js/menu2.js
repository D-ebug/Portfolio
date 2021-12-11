/* ne rabotaet*/
(() => {
    const refs = {
      openBtn: document.querySelector('.menu-open'),
      closeBtn: document.querySelector('.menu-close'),
      menu: document.querySelector('.menu'),
    };
  
    refs.openBtn.addEventListener('click', toggleMenu);
    refs.closeBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('.open-menu');
    }
  });