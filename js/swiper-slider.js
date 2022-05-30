new Swiper('.reviews__swiper', {
	// НАВИГАЦИЯ (точки снизу)
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
		dynamicBullets: true
	},

	keyboard: {
		enabled: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 0,


	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		850: {
			slidesPerView: 3,
		},
	},
});

new Swiper('.info-service__slider', {
	// СТРЕЛКИ
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
	keyboard: {
		// вкл/выкл
		enabled: true,
		// только когда слайдер в пределах видимости
		onlyInViewport: true,
	},

	// УПРАВЛЕНИЕ КОЛЕСОМ МЫШИ
	mousewheel: {
		sensitivity: 1,
	},

	clickable: true,
	// Автовысота
	autoHeight: true,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 0,

	// Бесконечный слайдер
	// loop: true,

	// Переключение при клике на слайд
	// slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
	// Количество пролистываемых слайдов
	// slidesPerGroup: 3,

	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	 },

	// Скорость
	speed: 700,

	// Активные слайд по центру
	// centeredSlides: true,

	// Свободный режим
	freeMode: true,

	// Мультирядность
	// slidesPerColumn: 2, 

	// Эффект потока
	effect: 'coverflow',

	// Автопрокрутка
	autoplay: {
		delay: 2000,
		// Закончить на последнем слайде
		// stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},

	// Отключить предзагрузку картинок
	preloadImages: false,

	lazy: {
		// Подгружать на старте переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Брейк поинты (адаптив)
	// Ширина экрана
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// },
});

new Swiper('.about__swiper', {
	
	// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
	keyboard: {
		// вкл/выкл
		enabled: true,
		// только когда слайдер в пределах видимости
		onlyInViewport: true,
	},

	clickable: true,
	// Бесконечный слайдер
	loop: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Скорость
	speed: 700,

	// Эффект прозрачности
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	// Автопрокрутка
	autoplay: {
		delay: 2000,
		// Закончить на последнем слайде
		// stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},

	// Отключить предзагрузку картинок
	preloadImages: false,

	lazy: {
		// Подгружать на старте переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

});