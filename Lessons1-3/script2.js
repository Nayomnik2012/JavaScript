

let showModal = document.querySelector('#show-modal');

function show() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';//назначаем свойство, показать
    document.querySelector('.modal').innerHTML = 777;
}

showModal.onclick = show;

let hideWindow = document.querySelector('#btn')

function hidenLine () {
    let btn = document.querySelector('.modal');
    btn.style.borderRadius = '20px'; //Свойство дисплея, убрать
    btn.style.border = '-5px';
    btn.style.backgroundColor = 'pink';
}

hideWindow.onclick = hidenLine; // присвоение события по нажатию 
