//ajax(url, method, functionName, dataArray)

//необходимо посладь запрос POST в формате date = '2018-12-30'


let date = { "date": '2018-12-30' };

document.querySelector('button').onclick = function() {
    let input = document.querySelector('#inp-date');
    let date = { "date": input.value };
    ajax('datetime.php', 'POST', showTime, date);
}




function showTime(data) {
    //функция которая со строки делает масив
    data = JSON.parse(data);
    console.log(data)
}