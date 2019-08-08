function myClick(event) {
    console.log('click');
    console.log(event.target);
    console.log(this);
    //console.log(event);
}

/* document.querySelector('#one').onclick = myClick;
document.querySelector('body').onclick = myClick;
document.querySelector('html').onclick = myClick; */

//можем работать с свойствами любого элимента, на который кликнем
document.onclick = function(event) {
    //console.log(event.target.id);
    if (event.target.id == 'one') console.log('кликнули на one');
}


document.querySelector('.two').onclick = function() {

    //блокирует всплытие события, отрабатывает только на two
    event.stopPropagation();
    console.log('2222222222click');
}


document.querySelector('.three').onclick = function() {
    console.log('33333333click');
    //елемент three скрывается
    this.style.display = 'none';
}