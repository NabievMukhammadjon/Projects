/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';
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
function initSliders() {
	bildSliders();	
	if (document.querySelector('.main-block__slider')) {
		new Swiper('.main-block__slider', {
			modules: [Navigation, Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			parallax: true,
			loop: true,

			// effect: "creative",
			// creativeEffect: {
			//   prev: {
			// 	shadow: true,
			// 	translate: [0, 0, -400],
			//   },
			//   next: {
			// 	translate: ["100%", 0, 0],
			//   },
			// },
			
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			// Пагинация
			pagination: {
				el: '.controll-main-block__dotts',
				clickable: true,				
			},	
			keyboard: {
				// включить\выключить
				enabled: true,
				onlyInViewport: true,
			},
			mousewheel: {
				sensitivity: 1,
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.special-offer')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.special-offer__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 32,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
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

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.special-offer__prev',
				nextEl: '.special-offer__next',
			},
			
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
				636: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				992: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.usefuls-articles__slider')) {
		new Swiper('.usefuls-articles__slider', {
			modules: [Navigation, Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 32,
			speed: 800,
			loop: true,

			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.usefuls-articles__prev',
				nextEl: '.usefuls-articles__next',
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			keyboard: {
				// включить\выключить
				enabled: true,
				onlyInViewport: true,
			},
			mousewheel: {
				sensitivity: 1,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				636: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 2,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.similar-products')) {
		new Swiper('.similar-products__slider', {
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 32,
			speed: 800,
			loop: true,
			grabCursor: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.similar-products__prev',
				nextEl: '.similar-products__next',
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			/*
			keyboard: {
				// включить\выключить
				enabled: true,
				onlyInViewport: true,
			},
			mousewheel: {
				sensitivity: 1,
			},*/
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				662: {
					slidesPerView: 2,
				},
				940: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
				},
			},
			// События
			on: {

			}
		});
	}
	/*
	if (document.querySelector('.thumbs-images')) {
		const thumbsSwiper = new Swiper('.thumbs-images', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 16,
			speed: 800,
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true
			},
			breakpoints: {
				992: {
					slidesPerView: 3,
				},
				1330: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
		new Swiper('.images-product__slider', {
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 	30,
			speed: 800,
			on: {
				init: function (swiper) {

				}
			}
		});
	}
	*/
	if (document.querySelector('.thumbs-images')) {
		new Swiper('.thumbs-images', {
			modules: [Navigation, Autoplay],
			breakpoints: {
				320: {
					slidesPerView: 2.1,
					spaceBetween: 	38,
				},
				636: {
					spaceBetween: 0,
				},
				892: {
					slidesPerView: 3.5,
				},
				1390: {
					slidesPerView: 4,
					spaceBetween: 38,
				},
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			spaceBetween: 	38,
			speed: 800,
			on: {
				init: function (swiper) {

				}
			}
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