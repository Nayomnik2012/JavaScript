function f1() {
    let div = document.querySelector('#one');
    div.innerHTML += ' Hello';
}

f1();

function f2() {
    let div = document.querySelector('#two');
    div.innerHTML += ' Hello';
}

f2();

function f3() {
    c.innerHTML += ' Hello';
}

let c = document.querySelector('#free');
f3();

//функция с параметром
function f4(Zzz) {
    //Zzz - параметр
    let d = document.querySelector('#' + Zzz);
    d.innerHTML += ' Its work ';
}
//указываем имя ID
f4('four');


function summa(a, b) {
    //тернальный оператор, сокращенный вид if
    //если (b) то b = b или b = 1
    //знак ? говорит об окончании условия
    (b) ? b = b: b = 1;

    return a * b;
}

console.log(summa(5));