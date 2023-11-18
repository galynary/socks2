(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-open-container]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-container]'),
        body: document.querySelector('body'),
        
    };
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    

    function toggleMenu() {
        refs.menu.classList.toggle('backdrop--is-hidden');
       
    }

  
})();