//обевляем переменную и ставим на ее обращение к ID #one
let one = document.querySelector('#one');

function myClick() {
    console.log('click');
    //ставим событию после выполнения 0, то есть обнуляем (разовое событие)
    one.onclick = null;
    let two = document.querySelector('#two');
    //перемещаем событие на второй блок и вешаем функцию myClick2
    two.onclick = myClick2;
}

function myClick2() {
    console.log(222222);
    let two = document.querySelector('#two');
    two.onclick = myClick3;
}

function myClick3() {
    console.log('Перезапись!)))');

}

// на переменной one которая обращается к ID '#one' вешаем функцию myclick()
//первое событие 
one.onclick = myClick;