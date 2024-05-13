
ymaps.ready(init);
// let center = [55.751279, 37.642953];
function init(){
    let mapContacts = document.querySelector('#mapContacts');
    if (mapContacts) {
        let myMap = new ymaps.Map("mapContacts", {   
            center: [55.756665, 37.622774],
            zoom: 14,
            // controls: ['routePanelControl'],
        });        
        let placemark1 = new ymaps.Placemark([55.751279, 37.642953], {
            balloonContent: `
                <div class="balloon__top">
                    <div class="balloon__title">SitDownPls на Солянке</div>
                    <div class="balloon__address">м. Китай-город, ул. Солянка, д.24</div>
                    <div class="balloon__contacts">
                        <a href="tel:+74958854547" class="balloon__link _icon-phone">+7 (495) 885-45-47</a>
                    </div>
                </div>
                <div class="balloon__center">
                    <div class="balloon__paragraph-center">
                        Часы работы:
                        <span class="balloon__text">с 10:00 до 21:00</span>
                    </div>
                    <div class="balloon__paragraph">
                        Что здесь: 
                        <span class="balloon__text">
                            шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
                        </span>
                    </div>
                </div>
            `,
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://sarkuz.netlify.app/icon-el.svg',
            iconImageSize: [32, 22],
            iconImageOffset: [0, 0],
        });

        /*
        let control = myMap.controls.get('routePanelControl');

        control.routePanel.state.set({
            type: 'masstransit', //для нескольких вариантов передвижения
            fromEnabled: false,
            from: 'Таганская',
            toEnabled: true,
        })
        */
        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
        // myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        // Размещение геообъекта на карте.
        // myMap.geoObjects.add(placemark); 
        myMap.geoObjects.add(placemark1); 
        placemark1.balloon.open();
    }
}