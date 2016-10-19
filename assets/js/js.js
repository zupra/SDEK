function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.74, 37.58],
        zoom: 13,
        controls: []
    });

    // Создадим экземпляр элемента управления «поиск по карте»
    // с установленной опцией провайдера данных для поиска по организациям.
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });

    myMap.controls.add(searchControl);

    // Программно выполним поиск определённых кафе в текущей
    // прямоугольной области карты.
    searchControl.search('СДЭК');
}

ymaps.ready(init);




var form = document.querySelectorAll('form');
form.addEventListener('submit', function(e) {
	e.preventDefault();
  var form = document.querySelector('button');

	var data = new FormData(form);
	var req = new XMLHttpRequest();
	req.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfk_uOTXNYKXvr01VEGPGgKAIwlNg90oSqHFqiYs73rscZ56w/viewform', true);

	req.send(data);

	btn.classList.add('success');
	btn.innerHTML = 'Готово!';
	form.reset();
		setTimeout(function(){
			btn.classList.remove('success');
			btn.innerHTML = 'Записаться';

		}, 600);

}, false);
