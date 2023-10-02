// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// function findBiggestWord(str){
//     return str.split(/\W+/).reduce(
//         function (longest, word){
//             return word.length > longest.length ? word : longest;
//         }, 
//     );
// }







// 2. написать функцию которая принимает число и возвращает перевернутое число

// function reverseNumber(number){
//     return number.split("").reverse().join("");
// }

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

// function unique(str){
//     let uniqueStr = "";
//     for(let i=0; i < str.length; i++){
//         if(!uniqueStr.includes(str[i])){
//             uniqueStr += str[i]
//         }
//     }
//     return uniqueStr;
// }

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

// function calcPoints(win, draw, loss){
//    let w = win*3;
//    draw = draw;
//    loss = 0;
//    return w + draw + loss;
// }



// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

// function statisctics(arr){
//     let quantity = 0;
//     for(let i = 0; i < arr.length; i++){
//         quantity += arr[i];
//     }
//     return {
//         max : Math.max(...arr),
//         min : Math.min(...arr),
//         quantity : arr.length,
//         avarage: quantity / arr.length
//     }
// }


// 6.Написать функцию которая принимает массив работников компании 

// const workers = [
//   { name: "Jimm", salary: 40000, department: "IT" },
//   { name: "Bob", salary: 60300, department: "HR" },
//   { name: "Stacy", salary: 15000, department: "IT" },
//   { name: "Tom", salary: 55200, department: "DEVOPS" },
//   { name: "Kate", salary: 25000, department: "IT" },
//   { name: "John", salary: 40000, department: "HR" },
//   { name: "Billy", salary: 60000, department: "DEVOPS" },
// ];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 




