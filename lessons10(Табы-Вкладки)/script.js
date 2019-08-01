function init() {
    let tabBody = document.querySelectorAll('.tab-body');

    for (let i = 1; i < tabBody.length; i++) {

        tabBody[i].style.display = 'none';

    }
}

init();

let tab = document.querySelectorAll('.tab');
tab.forEach(function(element) {
    element.onclick = showTabs;
});

//создаем функцию
function showTabs() {
    //getAttribute- функция которая считывает при клике
    //с переменной this которая ловит конкретное свойство на которое кликают
    let data = this.getAttribute('data');

    console.log(data);
    //помещаем в масив все эллементы с атребьютом .tab-body (то есть все тексты)
    let tabBody = document.querySelectorAll('.tab-body');

    //прогоняем через цыкл и сопоставляем масивы друг-другу
    for (let i = 0; i < tabBody.length; i++) {
        //по нажатию скрываем весь текст
        tabBody[i].style.display = 'none';
    }
    //обращаемся к tab-body и сопоставляем эллементы [data="' + data + '"]
    //высталяем стиль style.display = 'block', при клике ненужные эллементы скрываются
    document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';

    //существует так же другой вариант с использованием кавычек `` и переменной ${data}
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}