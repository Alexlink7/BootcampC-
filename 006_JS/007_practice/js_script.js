let sumOfPersons = prompt('Введите количество человек:');
let bill = prompt('Введите сумму счёта:');
let tipPrc = prompt('Введите процент чаевых:');

let personsBill = ((tipPrc / 100) * bill + Number(bill)) / sumOfPersons;

alert(personsBill);
