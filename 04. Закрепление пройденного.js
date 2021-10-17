// ЗАДАНИЕ
// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
[true, false];
// должно получиться
[{ gender: "man" }, { gender: "woman" }];

let logArr = [true, false, false, true, true];
let newArr = [];

for (i = 1; i < logArr.length; i++) {
  if (logArr[i] === true) {
    newArr.push({ gender: "man", age: 1 });
  } else {
    newArr.push({ gender: "women" });
  }
}

console.log(newArr);

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// например запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

function filterFor(array, a) {
  let newArray = [];

  for (let item of array) {
    if (item >= a) newArray.push(item);
  }
  return newArray;
}

let numbers = [5, 4, 3, 8, 0];
limit = prompt();
console.log(filterFor(numbers, limit));

let array2 = [1, 2, 3, 4];
console.log(filterFor(array2, limit));
