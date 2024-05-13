/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Pagination, Parallax, Autoplay} from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	bildSliders()
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.bottom-services__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const swiper1 = new Swiper('.bottom-services__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 20,
			parallax: true,
			speed: 500,
			// autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// lazy: true,
			
			// Эффекты
			// effect: 'fade',
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },			

			// Пагинация
			pagination: {
				el: '.bottom-services__dotts',
				clickable: true,
				// type: "fraction"
				// dynamicBulle	ts: true,

			},
			
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			// Брейкпоинты
			breakpoints: {
				// 640: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 10,
				// 	// autoHeight: true,
				// },
				768: {
					slidesPerView: 2,
					// spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					// spaceBetween: 30,
				},
				1268: {
					slidesPerView: 4,
					// spaceBetween: 30,
				},
			},
			// События
			on: {
			
			}
		});
	}
	if (document.querySelector('.testimonial__slider')) { 
		const swiper1 = new Swiper('.testimonial__slider', { 
			modules: [Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 18,
			parallax: true,
			speed: 500,
			// autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// lazy: true,
			
			// Эффекты
			// effect: 'fade',
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },			

			// Пагинация
			pagination: {
				el: '.slide-testimonial__dotts',
				clickable: true,
				// type: "fraction"
				// dynamicBullets: true,
			},
			
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 2,
					// spaceBetween: 10,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 3,
					// spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					// spaceBetween: 30,
				},
				1268: {
					slidesPerView: 5,
					// spaceBetween: 30,
				},
			},
			// События
			on: {
			
			}
		});
	}
	if (document.querySelector('.posts__slider')) { 
		const swiper1 = new Swiper('.posts__slider', { 
			modules: [Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 18,
			parallax: true,
			speed: 500,
			// autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// lazy: true,
			
			// Эффекты
			// effect: 'fade',
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },			

			// Пагинация
			pagination: {
				el: '.posts__dotts',
				clickable: true,
				// type: "fraction"
				// dynamicBullets: true,
			},
			
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 2,
					// spaceBetween: 10,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 3,
					// spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					// spaceBetween: 30,
				},
				// 1268: {
				// 	slidesPerView: 5,
				// 	// spaceBetween: 30,
				// },
			},
			// События
			on: {
			
			}
		});
	}
	
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});