function Mail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    if (valid) alert("Адрес эл. почты введен правильно!");
    else alert("Адрес электронной почты введен неправильно!");
}
 
function Phone() {
    let re = /^\d[\d\(\)\ -]{8,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    if (valid) alert("Номер телефона введен правильно!");
    else alert("Номер телефона введен неправильно!");
}  
 
function Name() {
    let re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']$/;
    let myName = document.getElementById('name1').value;
    let valid = re.test(myName);
    if (valid) alert("Имя введено правильно!");
    else alert("Имя введено неправильно!");
}   