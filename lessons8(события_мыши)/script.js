//один клик .onclick
document.querySelector('.onclick').onclick = function() {
    console.log('click');
}

//двойной клик ondblclick
document.querySelector('.ondblclick').ondblclick = function() {
    console.log('dblclick');
}

//реагирует на движение мышкой
document.querySelector('.onmousemove').onmousemove = function() {
    console.log('mousemove');
}

//срабатывает 1 раз, при наведении на эллемент
document.querySelector('.onmouseenter').onmouseenter = function() {
    console.log('mouse enter');
}

//срабатывает при покидании эллемента
document.querySelector('.onmouseleave').onmouseleave = function() {
    console.log('mouse leave');
}

//реагирует на скрол мыши
document.querySelector('.onmousewheel').onmousewheel = function() {
    console.log('mousewheel');
    //фиксирует мышку на эллементе и не дает прокрутку по странице 
    //с помощю скрола
    return false;
}

//отключает вывод контекстного меню с помощью правой клавиши мыши на эллементе
document.querySelector('.onmousewheel').oncontextmenu = function() {
    console.log('contextmenu');
    return false;
}

//функция возвращает NaN
function test() {
    console.log(2 / 3);
}

//функция возвращает 3.333333333333333
function test2() {
    let a = 6;
    return a / 3;
}

console.log(5 * test());
console.log(5 * test2());