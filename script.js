let name = prompt('Как вас зовут ?');
let age = prompt('Введите свой год рождения');
let year = prompt('Какой сейчас год ?');

function built( first = age , second = year) {
    let age = second - first
    return age };

alert(name + ' , ваш возраст ' + built())