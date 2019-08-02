//Работа с выпадающим списком
let select = document.querySelector('#select-1');
//
let radio = document.querySelector('input[name="rad-1"]');

select.onchange = function() {
    console.log(select.value);

}

//помещаем форму в переменную
let sendForm = document.querySelector('#send-form');
//вызываем функцию с событием event -отлавливает все что происходит
sendForm.onclick = function(event) {
    //функция .preventDefault() отлавливает перезагрузку и не дает обновить страницу
    event.preventDefault();
    console.log('work');
}