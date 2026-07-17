let age = 25;
if (age >= 18) {
    console.log('Вы совершеннолетний');
}
else {
    console.log('Вы несовершеннолетний');

}

// Пример с использованием if-else_if-else
let num = 0;
if (num > 0) {
    console.log('Число положительное');

} else if (num < 0) {
    console.log('Число отрицательное');

} else {
    console.log('Число равно нулю');

}

//Пример с использованием вложенного if
let num1 = 10;
let num2 = 5;
if (num1 > num2) {
    if (num1 % 2 == 0) {
        console.log('num1 больше num2 и является чётным');
    }
    else {
        console.log('num1 больше num2 и не является чётным');
    }
}
else {
    console.log('num1 меньше num2');
}