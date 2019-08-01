//подключение к селектору <p> и смена 
document.querySelector('p').innerHTML = 'byu!';
//дописываем в <p> с помощю оператора += 
document.querySelector('p').innerHTML += 'byu!';
// свойство .innerText не обрабатівает HTML теги внутри
document.querySelector('p').innerText = '<b>byu!</b>';
//заменяет весь элемент полностью, то есть <h1> поменялся на <h2>
document.querySelector('h1').outerHTML = '<h2>jjjj</h2>';




/* обращаемся к div применяем свойство insertAdjacentElement, после чего вносим параммерт "beforebegin" - 
который перед первым div вносит свойство 2222 */
document.querySelector('div').insertAdjacentHTML('beforebegin', 2222);
/* обращаемся к div применяем свойство insertAdjacentElement, после чего вносим параммерт 'afterbegin'
которій после первого div вносит свойство 3333 */
document.querySelector('div').insertAdjacentHTML('afterbegin', 3333);
//
document.querySelector('div').insertAdjacentHTML('afterend', 44444);
//
document.querySelector('div').insertAdjacentHTML('beforeend', 55555);





//в свойство .querySelector добавляем .one и он по класу достучится до нужного "span"
document.querySelector('.one span').innerHTML = 9999;



//замена атребюта alt
document.querySelector('img').alt = 'yello I';
//просмотр ортебьюта
console.log(document.querySelector('img').alt);
//замена ссылки на картинку по атребьюту src
document.querySelector('img').src = "//i3.i.ua/css/i2/blue/sprite/homepage.yc72a7bd9.png";
// замена титульной надписи 'title'
document.querySelector('title').innerText = 'Урок 5';
//замена CSS файла, стиль на странице меняется
document.querySelector('link').href = 'style2.css';
//меняем название атребьюта value в input (ввод)
document.querySelector('input').value = 'Саша';
//меняем свойство type на date (кадендарь)
document.querySelector('input').type = 'date';
//меняем свойство date на range (ползунок)
document.querySelector('input').type = 'range';