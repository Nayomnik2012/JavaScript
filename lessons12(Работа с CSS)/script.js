let block1 = document.querySelector('.block-1');

//таким образом, мы сокращаем обращение к классам, но так не рекомендуется делать
//let block1Style = block1.style;

//разшыряем блок с помощью свойства width
block1.style.width = '200px';

//возможность добавить класс с файла CSS 
block1.classList.add('red');

block1.classList.add('green');

//удалить класс
block1.classList.remove('red');


//список всех классов, подключенных
console.log(block1.classList);

//проверка наличия класса у элимента
console.log(block1.classList.contains('red'));

//если класс есть, включить
block1.classList.toggle('red');

//если класс есть, выключить
block1.classList.toggle('red');