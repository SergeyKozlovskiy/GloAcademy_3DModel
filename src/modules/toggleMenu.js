//Меню
const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li'),
    body = document.querySelector('body');
    const handlerMenu = () => {
        if(window.innerWidth > 768){
     menu.classList.toggle('active-menu');
        }else if(window.innerWidth < 768){
            menu.style.transform = 'translate(0)';
        }  
};
const handMenu = () => {
    if(window.innerWidth > 768){
        menu.classList.toggle('active-menu');
           }else if(window.innerWidth < 768){
               menu.style.transform = 'translate(-100%)';
           }  
};
// Делегирование
    body.addEventListener('click', () =>{
        let target = event.target;
        if(event.target.closest('.menu')){
            handlerMenu();
        }else if(event.target.classList.contains('close-btn')){
            handMenu();
        }else if(event.target.closest('menu > ul > li')){
            handMenu();
            //проверяет есть ли у меню класс active-menu и где произошел клик,если меню активно и клик мимо меню то скрыть меню
        }else if(menu.classList.contains('active-menu') && !event.target.closest('menu')){
            handMenu();    
        } 
    });
};

export default toggleMenu;