//XMLHttpRequest

/* //необходимо создать экземпляр обьекта
let xhttp = new XMLHttpRequest();


//необходимо присвоить минимальный набор состояний и свойст

//открываем соеденение
//post отправка, 'back.php' адрес куда мы будем слать запрос, true как будет позылатся
//запрос, true говорит что асинхронно
xhttp.open('post', 'back.php', true);

//указываем заголовки, которые посылаем
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//посылаем запрос на сервер
xhttp.send('name=vasya');

//отслеживает ответ от сервера, вешаем ананимную функцию
xhttp.onreadystatechange = function() {
    // this это то что пришло от сервера, readyState это состояние
    if (this.readyState == 4 && this.status == 200) {
        console.log(this);
    }
} */

// url адрес куда мы посылаем запрос, method каким методом мы будем посылать запрос
//functionName имя функции которая будет обрабатывать ответ от сервера
//dataArray масив данных
function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(requestData(dataArray));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.response);
        }
    }
}

//вспомогательная функция которая переобразует масив данных к строке
function rquestData(dataArr) {
    //создается пустая строка
    let out = '';
    //перебирает масивы вида "а" 
    for (let key in dataArr) {
        //при переборе внутрь key попадают ключи "name" 
        //${key}= "name"  ${dataArr[key]} "Ivan", 53
        // & разеденяет масив
        out += `${key}=${dataArr[key]}&`;
    }
    return out;
}