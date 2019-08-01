//указываем в функции переменную "е"
document.querySelector('#test').onkeypress = function(e) {
    //блокируем ввод
    return false;
    //информация, быль ли нажат альт на клавиатуре
    e.altKey false
        //код символа
    e.charCode 97
        //название клавиши
    e.code "KeyA"
        //был ли нажат контрл
    e.ctrKey false
        //какая клавиша была нажата
    e.key: "a"
        //дубляж, в связи с разными версиями браузера
    e.keyCode: 97
        //был ли нажат ШИФТ
    e.shiftKey: false
        //время от момента загрузки документа, до произхождения события
    e.timeStamp: 2121.00000
}

//для того что бы узнать код нажатой клавиши, необходимо ввести ее в поле input
document.querySelector('#test').onkeypress = function(e) {
    console.log(e.keyCode);
    //был ли нажат шифт в момент ввода
    console.log(e.shiftKey);

    // если e.keyCode менше 48 или "||" e.keyCode больше 57 то:
    if (e.keyCode < 48 || e.keyCode > 57) {

        //то печатаем сообщение
        document.querySelector('#massege').innerHTML = 'НЕ допустимые символы!';
        //иначе
    } else {

        //печатаем цыфры в поле input, this - это value- значение += и другие e.key - символы
        this.value += e.key;
    }
    return false;
}

// Также обратите внимание!!!!! что у больших и у маленьких символов свой код!!

//даем значение переменной вне функции 0
let left = 0;

//отлавливание события нажатий клавишь на документе "onkeypress"
document.onkeypress = function(e) {

    //обьявляем переменную 
    let sq = document.querySelector('.sq');

    //если при нажатии кнопки D
    if (e.keyCode == 100) {
        //то к переменной добавляем + 10
        left = left + 10;

        //подключаем стили style и marginLeft - перемещение в лево,
        //добавляем к переменной left пиксели 'px'
        sq.style.marginLeft = left + 'px';
    } else if (e.keyCode == 97) {
        left = left - 10;
        sq.style.marginLeft = left + 'px';
    }
}

document.onkeypress = function() {
    console.log('Works');
}

document.onkeydown = function() {
    console.log('Keydown');
}

document.onkeyup = function() {
    console.log('keyup');
}