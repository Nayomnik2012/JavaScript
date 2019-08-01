//событие, двигаем марджином текст влево
document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-250px';
}
//возвращаем текст в исходное состояние
document.querySelector('.read-rules-back').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '0';
}