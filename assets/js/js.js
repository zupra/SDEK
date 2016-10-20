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





//var form = document.querySelectorAll('form');
/*
document.addEventListener('submit', function(e) {
  if (e.target.tagName != 'FORM') return;

	e.preventDefault();

  var btn = this.querySelector('button'),
      data = new FormData(form),
      req = new XMLHttpRequest(),
      btnText = btn.innerHTML;

      //https://goo.gl/forms/oOLlbGcPDOKlcH9b2
	req.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfk_uOTXNYKXvr01VEGPGgKAIwlNg90oSqHFqiYs73rscZ56w/formResponse', true);

	req.send(data);
	btn.classList.add('success');
	btn.innerHTML = 'Готово!';
	form.reset();
		setTimeout(function(){
			btn.classList.remove('success');
			btn.innerHTML = btnText;
		}, 600);

}, false);
*/





var forms = document.querySelectorAll('form');

Array.prototype.forEach.call(forms, function(el) {
  el.onsubmit = function(e) {

    e.preventDefault();

    var btn = this.querySelector('button'),
        data = new FormData(el),
        req = new XMLHttpRequest(),
        btnText = btn.innerHTML;

    //https://goo.gl/forms/oOLlbGcPDOKlcH9b2
  	req.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfk_uOTXNYKXvr01VEGPGgKAIwlNg90oSqHFqiYs73rscZ56w/formResponse', true);

  	req.send(data);
  	btn.classList.add('success');
  	btn.innerHTML = 'Готово!';
  	el.reset();
  		setTimeout(function(){
  			btn.classList.remove('success');
  			btn.innerHTML = btnText;
  		}, 3000);

  }
});


/*
var form = document.querySelectorAll('form')[0];
form.addEventListener('submit', function(e) {
	e.preventDefault();

  var btn = this.querySelector('button'),
      data = new FormData(form),
      req = new XMLHttpRequest(),
      btnText = btn.innerHTML;

      //https://goo.gl/forms/oOLlbGcPDOKlcH9b2
	req.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfk_uOTXNYKXvr01VEGPGgKAIwlNg90oSqHFqiYs73rscZ56w/formResponse', true);

	req.send(data);
	btn.classList.add('success');
	btn.innerHTML = 'Готово!';
	form.reset();
		setTimeout(function(){
			btn.classList.remove('success');
			btn.innerHTML = btnText;
		}, 600);

}, false);
*/
