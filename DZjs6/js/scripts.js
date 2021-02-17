document.write('</br>' + '1.Дана строка aaa@bbb@ccc. Замените все @ на ! с помощью глобального поиска и замены.' + '</br>');

let string1 = 'aaa@bbb@ccc';

document.write(`C замененными символоми ${string1.replace(/@/g, "!")}` + '</br>');

document.write('</br>' + '2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте этудату в формат 31/12/2025.' + '</br>');

let date = '2025-12-31';

document.write(`C замененными символоми ${date.split('-').reverse().join('/')}` + '</br>');

document.write('</br>' + '3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).' + '</br>');

document.write('\n');
str = ('Я учу javascript!')
document.write(str.substring(2,5) + ' ' + str.substring(6,17));
document.write(str.slice(2,5) + ' ' + str.slice(6,17));
document.write(str.substr(2,3) + ' ' + str.substr(6,11) + '</br>');


document.write('</br>' + '4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.' + '</br>');

let array4 = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let item of array4) {
    sum += Math.pow(item, 3);
}

document.write(`Корень кубов из суммы элементов массива ${Math.sqrt(sum)}` + '</br>');


document.write('</br>' + '5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.' + '</br>');

let a = 6,
    b = 1,
    c = a - b;

document.write(`Результат : ${Math.abs(c)}` + '</br>');



document.write('</br>' + '6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).' + '</br>');


function formatDate(date) {
    let day, month, year, hour, minutes, seconds;

    day = date.getDate();
    day < 10 ? day = '0' + day : day;

    month = date.getMonth() + 1;
    month < 10 ? month = '0' + month : month;

    year = date.getFullYear();
    


    hour = date.getHours();
    hour < 10 ? hour = '0' + hour : hour;

    minutes = date.getMinutes();
    minutes < 10 ? minutes = '0' + minutes : minutes;

    seconds = date.getSeconds();
    seconds < 10 ? seconds = '0' + seconds : seconds;

    return hour + ':' + minutes + ':' + seconds + ':' + day + ':' + month + ':' + year + ':';
}

document.write(`Текущее время : ${formatDate(new Date())}` + '</br>');

document.write('</br>' + '7. Дана строка aa aba abba abbba abca abea. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква a, буква b любое количество раз, буква a.' + '</br>');

let string7 = 'aa aba abba abbba abca abea',
    reg = /ab + a/gi;

document.write(`Выводим совпадения : ${string7.match(reg)}` + '</br>');


document.write('</br>' + '8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номертелефона>). Функция должна возвращать true или false. Используйте регулярные выражения.' + '</br>');

function checkPhone(phone) {
    let reg = /^(\+375)(\(\d{2}\)|\d{2})\d{7}$/;

    return reg.test(phone);
}

let number = prompt("Введите номер телефона в формате +375(--)-------", "+375(44)1234567");

while (!checkPhone(number)) {
    number = prompt("Ошибка!")
}

document.write(`Введен номер телефона ${number} Проверка : ${checkPhone(number)}` + '</br>');


document.write('</br>' + '9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия: - весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки; - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени; - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. Функция должна возвращать true или false. Используйте регулярные выражения.' + '</br>');

function checkEmail(email) {
    let reg = /^[A-Za-z]{1}[A-Za-z1-9._-]+@[A-Za-z1-9._-]+\.[a-z]{2,11}$/;

    if (reg.test(email) && !(/[-_.]{2,}/.test(email))) {
        return true;
    } else return false;
}

let email = prompt("Введите email", "name@gmail.com");

while (!checkEmail(email)) {
    email = prompt("Ошибка!", "name@gmail.com");

}

document.write(`Введен email ${email} Проверка : ${checkEmail(email)}` + '</br>');

document.write('</br>' + '10. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.' + '</br>');

let $10regex = /(http[s]?:[\/]{2}[\w.]*)([\w\/-]*)([\?/w=&]*)([#\w]*)/i,
    $10string = "https://www.tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3";
function ReturnUrlSections(url, regex){
    let text = "Части URL",
            array = url.match(regex);
        for (let i = 1; i < array.lenght; i++)
            text += "\n\n" + array[i]
        alert(text)
}

ReturnUrlSections($10string, $10regex);

