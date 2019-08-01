console.log(222)

//Присваевает значение, селектору или ID
document.getElementById('out').innerHTML = 777; //текст внутри элемента
let p;
p = document.getElementById('out')
p.innerHTML = 555;
p = document.querySelector('#out') //присвоение по классу 
p.innerHTML = 4324234;
console.log(p)

// let year = 1987
// let year_now = 2019