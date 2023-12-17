// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================
// Достаём из документа все <p> в виде массива
// let ps = document.querySelectorAll(".list-inner-team__numb");
// let num = document.querySelectorAll(".active-block-samples__num");

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// for (let p of ps) {
//     // Устанавливаем этому параграфу CSS-свойство border
//     p.style.color = getRandomColor();
// }

// function getRandomColorSamples() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// for (let p of num) {
//     // Устанавливаем этому параграфу CSS-свойство border
//     p.style.color = getRandomColorSamples();
// }

//========================================================================================================================================================

const dopSpollerBtn = document.querySelector('.spollers-dop__btn');
const dopSpollerDescr = document.querySelector('.dop__descr');


dopSpollerBtn.addEventListener('click', () => {
    if (!dopSpollerDescr.classList.contains('_disabled')) {
        dopSpollerDescr.classList.add('_disabled');
    } else {
        setTimeout(() => {
        dopSpollerDescr.classList.remove('_disabled');
        }, 500);
    }
    
});

// =====

const formSubscribe = document.querySelector('.form-connection'),
      checkboxSubscribe = document.getElementById('c_1'),
      checkboxLabelSubsc = document.querySelector('.checkbox-connection__label');

formSubscribe.addEventListener('submit', (e) => {
    if (!checkboxSubscribe.checked) {
        checkboxLabelSubsc.classList.add('error-red__border');
    } else {
        checkboxLabelSubsc.classList.remove('error-red__border');
    }
});

checkboxSubscribe.addEventListener('click', (e) => {
    if(checkboxLabelSubsc.classList.contains('error-red__border')) {
        checkboxLabelSubsc.classList.remove('error-red__border');
    }
})

// =====
const mod = document.querySelectorAll('.tabs-team__btn'),
      titleVolontr = document.querySelector('.tabs-team__subtitl');

mod.forEach(item => {
    if (item.textContent === '2021-2022') {
        item.addEventListener('click', () => {
            titleVolontr.innerHTML = '';
        })
    } else if (item.textContent === '2022-2023') {
        item.addEventListener('click', () => {
            titleVolontr.innerHTML = 'Волонтёры исследования';
        })
    }
});

//========================================================================================================================================================

const resBtnSpoller = document.getElementById('spollerRes'),
      infoBtnSpoller = document.getElementById('spollerInfo'),
      smallListSpoller = document.querySelector('.header-spollers__list_small'),
      bigListSpoller = document.querySelector('.header-spollers__list_big');

resBtnSpoller.addEventListener('click', () => {
    infoBtnSpoller.classList.remove('_spoller-active');
    bigListSpoller.classList.add('hidden');
    resBtnSpoller.classList.add('_spoller-active');
    smallListSpoller.classList.remove('hidden');
})

infoBtnSpoller.addEventListener('click', () => {
    resBtnSpoller.classList.remove('_spoller-active');
    smallListSpoller.classList.add('hidden');
    infoBtnSpoller.classList.add('_spoller-active');
    bigListSpoller.classList.remove('hidden');
})

