//анонимная функция, без имени и больше не где использоватся не будет
document.querySelector('.push').onclick = function() {
    // обращение ко всем элементам querySelectorAll 
    let radio = document.querySelectorAll('.radio-input');
    //console.log(radio);
    //цыкл for 
    for (let i = 0; i < radio.length; i = i + 1) {
        //radio - сам масив, i - элементы масива, value - свойство масива
        //radio - сам масив, i - элементы масива, checked - свойство масива
        //перебирает масив и определяет состояние элементов, нажат или нет
        //console.log(radio[i].checked);
        //если выбрано свойство то:
        if (radio[i].checked) {
            //выводим выбраное свойство .value
            console.log(radio[i].value);
        }
    }
    // обьявляем переменную, закидываем в ее функцию querySelectorAll
    let p = document.querySelectorAll('p');
    console.log(p)
        //открываем цыкл
    for (let i = 0; i < p.length; i = i + 1) {
        //меняем цвет всем Р на красный 
        p[i].style.color = 'red';
    }
    //создаем переменную и в параметры вставляем ID и название option
    let option = document.querySelectorAll('#my-select option');
    console.log(option);
    for (let i = 0; i < option.length; i = i + 1) {

        //console.log(option[i].selected);
        //условие если выбран один из элементов тоЖ
        if (option[i].selected) {
            //выводить название выбраного элемента
            console.log(option[i].value);
        }

    }
}