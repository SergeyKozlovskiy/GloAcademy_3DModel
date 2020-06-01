' use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglepopup from './modules/togglepopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import scrolling from './modules/scrolling';

//Таймер
countTimer('31 December 2020');
//Плавный скролл
scrolling();

//Меню
toggleMenu();

//popup
togglepopup();

//Табы
tabs();

//Слайдер
slider();

//смена фото
changePhoto();

//Калькулятор
calc(100);

//send-ajax-form
sendForm();