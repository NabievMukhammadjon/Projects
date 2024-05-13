// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import AOS from 'aos';
import 'aos/dist/aos.css';
// ==================================================================

document.addEventListener('DOMContentLoaded', function() {
    const headerSearch = document.getElementById('header-search');
    const searchIcon = document.querySelector('.searchs-header__icon');
    headerSearch.addEventListener('input', function(){
        if(headerSearch.value !== null) {
            searchIcon.classList.add('_active');   
        } else if (headerSearch.value === null) {
            searchIcon.classList.remove('_active');   
        }
    });

    
})  

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

// ==================================================================
AOS.init();
AOS.init({
    // Global settings:
    disable: false, // принимает следующие значения: 'телефон', 'планшет', 'мобильный', логическое значение, выражение или функция
    startEvent: 'DOMContentLoaded', // имя события, отправленного в документ, который AOS должен инициализировать
    initClassName: 'aos-init', // класс применяется после инициализации
    animatedClassName: 'aos-animate', // класс применяется к анимации
    useClassNames: false, // если true, добавит содержимое `data-aos` как классы при прокрутке
    disableMutationObserver: false, // отключает автоматическое обнаружение мутаций (дополнительно)
    debounceDelay: 50, // задержка на устранение дребезга, используемая при изменении размера окна (дополнительно)
    throttleDelay: 99, // задержка на дроссель, используемая при прокрутке страницы (дополнительно)
  
    // Настройки, которые можно переопределить для каждого элемента с помощью атрибутов `data-aos-*`:
    offset: 50, // offset (in px) from the original trigger point 
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});