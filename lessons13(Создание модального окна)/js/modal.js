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
    element.onclick = closeModalWgrap;
});



//функция показывает модальное окно
function showModal() {
    //получаем кнопку с помощью "this" кликаем на обьект в HTML 
    //и выбираем закладку "Properties" ищем dataset внутри которого находится "modal"
    let modalId = this.dataset.modal;

    //ищем родителя в DOM удаляем CSS свойство hide в DIV с ID sign-in
    //с помощью "parentElement.classList.remove('hide')"
    //параметр "classList" дает возможность работать с класами
    document.querySelector(modalId).parentElement.classList.remove('hide');

    //удаляем "hide" в DIV "modal-wrap"
    document.querySelector(modalId).classList.remove('hide');

    //После функции открытия окна, добавляем функцию закрытия окна в низ функции закрытия окна

    //отлавливаем по нажатию клавиши Escepe (закрываем окно с помощью кнопки)
    document.onkeydown = function(event) {
        //если при нажатии event -событие, keyCode - отслежываемый код
        if (event.keyCode == 27) {
            //получаю все модальные оболочки, перебираем их
            document.querySelectorAll('.modal-wrap').forEach(function(element) {
                //добавляем элементу класс hide
                element.classList.add('hide');
                //заходим во внутрений элемент и ищеи вложенный в его элемент
                element.children[0].classList.add('hide');
                //что бы после закрытия окна по нажатию Escepe функция не срабатывала
                document.onkeydown = null;
            });

        }
    }

}

//аналогичная функция для закрытия модального окна по кнопке CLOSE 
function closeModal() {

    let modalId = this.dataset.modal;
    //добавлено "add"
    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
    //что бы после закрытия окна по нажатию Escepe функция не срабатывала
    document.onkeydown = null;
}


//функция закрытия по клику на серую область
function closeModalWgrap() {
    //добавляем класс hide
    this.classList.add('hide');
    //вібираем 0 єлемент из списка children[0] и добавляем класс classList.add('hide')
    this.children[0].classList.add('hide');
    //что бы после закрытия окна по нажатию Escepe функция не срабатывала
    document.onkeydown = null;
}