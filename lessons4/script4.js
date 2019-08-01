let r = Math.random();
r = r * 10
r = Math.round(r);

let userNum = document.querySelector('#user-num')

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
    let num = userNum.value;
    num = parseInt(num);
    console.log(r)
    //isNaN() проверяет является ли функция числом 
    if (isNaN(num)) {
        document.querySelector('#s').innerHTML = 'Это не число';
    }
    else {
        if (num == r) {
            alert('Вы ввели: ' + num + ' и программа выбрала ' + r)
            location.reload();//если число совпадает, перезапускается страница
        }
        else {
            document.querySelector('#s').innerHTML = 
            'НЕ угадал';
        }
    }
}