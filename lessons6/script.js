//анонимная функция, без имени и больше не где использоватся не будет
document.querySelector('.push').onclick = function() {
    //данные из input
    console.log(document.querySelector('.text-imput').value);
    //считуем данные с imput с паролем
    console.log(document.querySelector('.pass-imput').value);
    //считуем данные с imput с скролом
    console.log(document.querySelector('.range-imput').value);
    //считуем данные с imput календарем
    console.log(document.querySelector('.calendar-imput').value);
    //считуем данные с imput с цветом сайта
    console.log(document.querySelector('.color-imput').value);
    //считуем данные с imput с checkbox с помощью .checked
    console.log(document.querySelector('#checkbox-imput').checked);
    //условия для checkbox
    if (document.querySelector('#checkbox-imput').checked) {
        console.log('Да!!!');
    } else {
        console.log('НЕТ!!!');
    }
}