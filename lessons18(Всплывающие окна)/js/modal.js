//выбираем все кнопки "querySelectorAll" с селектором "".modal-show"
//обьевляем цыкл "forEach" и помещаем в его анонимную функцию "function"
//с переменной element, которая вызывает по клику другую функцию "showModal"
document.querySelectorAll('.modal-show').forEach(function(element) {
    element.onclick = showModal;
});

//кнопка закрытия окна 
document.querySelectorAll('.modal-close').forEach(function(element) {
    element.onclick = closeModal;
});

//закрытие по клику на серое поле
document.querySelectorAll('.modal-wrap').forEach(function(element) {
    element.onclick = closeModal;
});



//функция показывает модальное окно
function showModal() {
    //кнопка сечас this у ее есть атрибьют data-model, который находится в dataset
    //и выбираем закладку "Properties" ищем dataset внутри которого находится "modal"
    let modalId = this.dataset.modal;

    //удаляем "hide" в DIV "modal-wrap"
    document.querySelector(modalId).classList.remove('hide');

    //После функции открытия окна, добавляем функцию закрытия окна в низ функции закрытия окна

    //отлавливаем по нажатию клавиши Escepe (закрываем окно с помощью кнопки)
    document.onkeydown = function(event) {
        //если при нажатии event -событие, keyCode - отслежываемый код
        if (event.keyCode == 27) {
            //запускаем функцию закрытия окна
            closeModal();
        };

    }
}

//аналогичная функция для закрытия модального окна по кнопке CLOSE 
function closeModal() {

    //получаю все модальные оболочки, перебираем их
    document.querySelectorAll('.modal-wrap').forEach(function(element) {

        //добавляем элементу класс hide
        element.classList.add('hide');

    });
    //что бы после закрытия окна по нажатию Escepe функция не срабатывала
    //выносим за цыкл
    document.onkeydown = null;
}