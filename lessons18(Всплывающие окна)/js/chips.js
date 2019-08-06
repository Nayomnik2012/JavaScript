
function chips(message) {
    //создаем элемент DIV на странице
    let chips = document.createElement('div');
    //присваеваем элементу chips , класс, тоесть собственный стиль
    chips.classList.add('chips');
    //вывоим сообщение в элемент div с помощью переменной message
    chips.innerHTML = message;
    //получаем элимент внутрь страницы в тело body
    //с помощью appendChild добавляем элемент
    document.querySelector('body').appendChild(chips);
    //ставим таймер на ищезновение chips , первым параметром
    //идет ананимная функция function(){deleteChips(chips)}, вторым время 3000
    setTimeout(function(){deleteChips(chips)}, 3000);
}

//вызываем событие котрое по клику вызывает безымянную функцию
//для того, что бы можно было внутри функции добавить АТРИБЬЮТ "Hello"
document.querySelector('button').onclick = function(){
    //для того, что бы добавить АТРИБЬЮТ
    chips('Hello');
}

//chips('Hello');