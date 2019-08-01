/* функция не работает по причине querySelectorAll так как нельзя 
применить действия onclick - нажатие мыши  не перебрав масив */
//function() анонимная функция на отдельное событие(обычно разовое)
document.querySelectorAll('.block').onclick = function() {
    console.log('work');
}

/* помещаем в переменную blocks выборку всех селекторов block с
помошью функции document.querySelectorAll */
let blocks = document.querySelectorAll('.block');

//открываем цыкл для перебора коллекций, то есть всех эллиментов
for (let i = 0; i < blocks.length; i = i + 1) {

    /*blocks - переменная в которой масив, [i] - эллементы масива
    .onclick - вешаем на все эллементы действия клика мыши */
    //one- название функции, которая определена ниже
    blocks[i].onclick = one;
}

//еще один вариан обращения
let blocks2 = document.getElementsByClassName('block');

for (let i = 0; i < blocks.length; i++) {
    console.log('work');
}

/* переменная this, если использовать this внутри функции на определенное
событие то this попадает сам элемент, это дает внутри функции обращатся 
к эллементу и работать с ним */

function one() {
    /* выводит в консоль текст, который находится внутри эллемента
    this - обращается к нажатому эллементу,
    innerHTML - выводит текст */
    console.log(this.innerHTML);

    /* this - обращается к эллементу, style - вызывается функция стиля, 
    background - задний фон,
    'green' - цвет */
    this.style.background = 'green';
}


/* //element - это служебная переменная, назвать можно как угодно
//forEach цыкл перебора
blocks.forEach(function(element) {
    console.log(element);

    //вешаем событие .onclick
    element.onclick = function() {
        console.log('work');
    }
});
 */