// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
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
