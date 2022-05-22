//                                              OKTEN-HCAW-3-JS
//======================================================================================================================
//                                                Class Work
//                                              OKTEN-CW-3-JS
//======================================================================================================================
// - створити функцію яка приймає масив та виводить його
let array = [1, 3, 4, true];
function fArray(array) {
    console.log('Arr ', array);
    return array;
};
fArray(array);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(a, b, c) {
   if (a < b && a < c) {
       return a;
   } else if (b < a && b < c) {
       return b;
   } else return c;
};
console.log('Min Number ', minNum(3, 5, 2));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else return c;
};
console.log('Max Number ', maxNum(7,3,9));

// - створити функцію яка повертає найбільше число з масиву
let arrMax = [6, 3, 7, 1, 4, 9];

function maxNumArr(arr) {
    let maxNum = arr[0];
    for (let arrMaxNumElement of arr) {
        if (arrMaxNumElement > maxNum) {
            maxNum = arrMaxNumElement;
        };
    } return maxNum;
};
let maxNumber = maxNumArr(arrMax);
console.log('Max Number in Array ', maxNumber);

// - створити функцію яка повертає найменьше число з масиву
let arrMin = [2, 4, 1, 8, 9, 22, 14];

function minNumArr(arr) {
    let minNum = arr[0];
    for (let arrElement of arr) {
        if (arrElement < minNum) {
            minNum = arrElement;
        };
    } return minNum;
};
let minNumber = minNumArr(arrMin);
console.log('Min Number in Array ', minNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let sumArr = [1,2,10];

function sumAllNumArr(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    };
    return sum;
};
let sum = sumAllNumArr(sumArr);
console.log('Sum of number in Array ', sum);// ->13

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrMidle = [1,2,10,1,6];

function middleNumber(arr) {
    let midl = 0;
    for (let arrElement of arr) {
        midl += arrElement;
    } return midl/arr.length;
};
let midlMath = middleNumber(arrMidle);
console.log('Middle ', midlMath);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrRandom = [];

function fRandomNum() {
    for (let i = 1; i <= 100; i++) {
        arrRandom.push(Math.round(Math.random()*100));
    };
};
fRandomNum();
console.log('Random ', arrRandom);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let key = [];

function getKeyArr() {
    for (let i = 0; i < arrObj.length; i++) {
        let element = arrObj[i];
        for (let elementKey in element) {
            key.push(elementKey);
        }
    }
};
getKeyArr(arrObj);
console.log('Key of Obj ', key); // -> [ name, age, model ]

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arrObj2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let value = [];

function getValueArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let argument = arr[i];
        let val = Object.values(argument);
        for (let j = 0; j < val.length; j++) {
            let valElement = val[j];
            value.push(valElement);
        };
    };
};
getValueArr(arrObj2);
console.log('Value of Obj ', value); // --> [ Dima, 13, Camry ]

//======================================================================================================================
//                                                Home Work
//                                              OKTEN-HW-3-JS
//======================================================================================================================
// - створити функцію яка обчислює та повертає площу прямокутника висотою
function countSquare(h) {
    let b = 10;
    return h*b;
};
let square = countSquare(5);
console.log('Square = ', square);

// - створити функцію яка обчислює та повертає площу кола
function countSquareCircle (r) {
    return Math.round(Math.PI * Math.pow(r, 2));
};
let squareCircle = countSquareCircle(1);
console.log('Circle square = ', squareCircle);

// - створити функцію яка обчислює та повертає об'єм циліндру
function countValueCilindr(r, h) {
    return Math.round(Math.PI*Math.pow(r,2)*h);
};
let valueCilindr = countValueCilindr(2,5);
console.log('Value of cilindr = ', valueCilindr)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let numMax;
function numbers() {
    let numMin = arguments[0];
    numMax = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        if (argument < numMin ) {
            numMin = argument;
        };
        if (argument > numMax) {
            numMax = argument;
        };
    };
    return numMin;
};
let min = numbers(2, 4, 5, 10, 33);
console.log('Min = ', min);
console.log('Max = ', numMax);

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
let str = 'Ukraine Army Is The Best!';
function createBlock(arg) {
    let div = document.createElement('div');
    div.innerText = arg;
    document.body.append(div);
};
createBlock(str);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let strLi1 = 'Ukraine!!!';
let ul = document.createElement('ul');
document.body.append(ul);
function createUlLi1(arg) {
        let li = document.createElement('li');
        li.innerText = arg;
        ul.append(li);
};
createUlLi1(strLi1);
createUlLi1(strLi1);
createUlLi1(strLi1);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let strLi = 'Ukraine Winner!!!';
function createUlLi(arg) {
    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.innerText = arg;
        ul.append(li);
    };
};
createUlLi(strLi);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrElem = [true, 5, 2, 'false', 35];
function bildUl(arr) {
    let ol = document.createElement('ol');
    ol.style.marginLeft = '20px';
    ol.style.marginTop = '20px';
    document.body.append(ol);
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        let li = document.createElement('li');
        li.innerText = arrElement;
        ol.append(li);
    };
};
bildUl(arrElem);

//======================================================================================================================
//                                              Additional Work
//                                              OKTEN-AW-3-JS
//======================================================================================================================
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
//
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// ==============================================================================================================