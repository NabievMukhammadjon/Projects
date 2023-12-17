/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Parallax, Autoplay } from 'swiper';
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
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	bildSliders();
	if (document.querySelector('.tabs-schedule__content')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.tabs-schedule__slider_1', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 40,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.controll-slider_1__prev',
				nextEl: '.controll-slider_1__next',
			},
			
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1580: {
					slidesPerView: 4,
				},
			},
			
			// События
			on: {

			}
		});
		new Swiper('.tabs-schedule__slider_2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			
			modules: [Navigation, Autoplay],
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
	
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
	
			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
	
			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/
	
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
	
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.controll-slider_2__prev',
				nextEl: '.controll-slider_2__next',
			},
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 40,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				1600: {
					slidesPerView: 5,
				},
			},
			// События
			on: {
	
			}
		});	
	}
	if (document.querySelector('.tabs-experts__slider')) {
		new Swiper('.tabs-experts__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			parallax: true,
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.tabs-experts__btn-prev',
				nextEl: '.tabs-experts__btn-next',
			},
			
			// Брейкпоинты
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1410: {
			// 		slidesPerView: 4,
			// 	},
			// },
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.workers-empty')) {
		new Swiper('.workers-empty__slider', { 
			modules: [Navigation, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			parallax: true,
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				prevEl: '.workers-empty__btn-prev',
				nextEl: '.workers-empty__btn-next',
			},
		});
	}
	if (document.querySelector('.volontr-empty')) {
		new Swiper('.volontr-empty__slider', { 
			modules: [Navigation, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			parallax: true,
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				prevEl: '.volontr-empty__btn-prev',
				nextEl: '.volontr-empty__btn-next',
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	bildSliders();
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