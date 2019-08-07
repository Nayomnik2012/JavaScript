//ставим параметр по умолчанию для timeremove = 3000
function chips(message, timeremove = 3000) {
    /* //если параметр timeremove не определен в функции, то по умолчанию
    //даем ему 3 секунды
    if (timeremove === undefined) timeremove = 3000; */
    //создаем элемент DIV на странице
    let chips = document.createElement('div');
    //присваеваем элементу chips , класс, тоесть собственный стиль
    chips.classList.add('chips');
    //вывоим сообщение в элемент div с помощью переменной message
    chips.innerHTML = message;
    /* //получаем элимент внутрь страницы в тело body
    //с помощью appendChild добавляем элемент
    document.querySelector('body').appendChild(chips); */
    addChips(chips);
    //ставим таймер на ищезновение chips , первым параметром
    //идет ананимная функция function(){deleteChips(chips)}, вторым время 3000
    setTimeout(function(){deleteChips(chips)}, timeremove);
}

//в данной функции есть параметр chips
function deleteChips(chips) {
    //удаляем chips по истечению 3 секунд
    chips.remove();

    let allChips = document.querySelectorAll('.chips-field .chips');

    if (allChips.length == 0) document.querySelector('.chips-field').remove();
}

function addChips(chips) {
    let chipsField = document.querySelector('.chips-field');
    if (chipsField) {
        chipsField.appendChild(chips);
    }
    else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
}


//вызываем событие котрое по клику вызывает безымянную функцию
//для того, что бы можно было внутри функции добавить АТРИБЬЮТ "Hello"
document.querySelector('button').onclick = function(){
    //для того, что бы добавить АТРИБЬЮТ
    chips('Hello', 3000);
}



//chips('Hello');