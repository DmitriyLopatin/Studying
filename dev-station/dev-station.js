// function reverseWords(str) {
//     let strArr = str.split(" ")
//     console.log(strArr)
//     const strOut = strArr.map(el => {
//         return el.split("").reverse().join("")
//     }).join(" ")
//     return strOut
// }
// console.log(reverseWords('В восемь утра он пошёл на занятия'))


// Задача: Сложение цифр числа
// function sumDigits(number) {
//     let arrNumb = String(number).split("").map(el=>Number(el))
//     let sum = arrNumb.reduce((a, b) => a + b, 0)

// }
// sumDigits(1246172836817263875)


/// уникальность чисел
// function checkSquare(square) {
//     let arr = square.reduce((a, b) => [...a, ...b], [])
//     let arr2 = arr.filter((el,index,arr)=>arr.indexOf(el)!==index)
//     console.log(arr2)
//      if(arr2.length==0){
//         return true
//      }else{
//         return false
//      }
// }
// checkSquare([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])

// function calculateBMI(weight, height) {
//     let bmi = Number((weight / ((height / 100) * (height / 100))).toFixed(2))
//     switch (true) {
//         case bmi > 10 :
//             return  [bmi, 'недостаток веса'];
//         case bmi >= 18.5, bmi < 25:
//             return [bmi, 'нормальный вес'];
//         case bmi >= 25, bmi < 30:
//             return [bmi, 'избыточный вес'];
//         case bmi >= 30:
//             return [bmi, 'ожирение']
//     }
// }
// console.log(calculateBMI(69, 175))

// function dashatize(num) {
//     let arr = String(num).split("").map(el=>Number(el))
//     let arr2 = arr.map((a, index, arr3) => {
//         let next = arr3[index + 1]
//         if ((a % 2 !== 0 || next % 2 !==0) && index!==arr3.length-1 ) {
//             return a + "-"
//         }else{
//             return a
//         }
//     })
//     console.log(arr2.join(""))
// }
// dashatize(8653843533)
// dashatize(6815)

// function hammingDistance(str1, str2) {
//     let arr = str1.toLowerCase().split("")
//     let arr2 = str2.toLowerCase().split("")
//     let arrOut = arr.filter((el,index,arr3) =>arr3[index] !== arr2[index] )
//     console.log(arrOut)
// }
// hammingDistance('ветер', 'смерч')


//Минимальное количество монет
// function calculateCoins(amount) {
//     const obj = {}
//     if (amount / 10 >= 1) {
//         obj["10"] = Math.floor(amount / 10)
//         if (amount % 10 >=5){
//             obj["5"] = Math.floor((amount % 10) / 5)
//             if ((amount % 10) % 5 >=2){
//                 obj["2"] = Math.floor(((amount % 10) % 5 ) / 2)
//                 if (((amount % 10) % 5) % 2 >= 1){
//                     obj["1"] = ((amount % 10) % 5) % 2  
//                 }
//             } else if ((amount % 10) % 5 >= 1) {
//                 obj["1"] = ((amount % 10) % 5) 
//             }
//         } else if (amount % 10 >= 2){
//             obj["2"] = Math.floor((amount % 10) / 2)
//             if ((amount % 10) % 2 >= 1) {
//                 obj["1"] = Math.floor(((amount % 10) % 5) / 2)
//             }
//         } else if (amount % 10 >= 1) {
//             obj["1"] = Math.floor((amount % 10) / 1)
//         }
//     } else if (amount / 5 >= 1) {
//         obj["5"] = Math.floor(amount / 5)
//         if ((amount % 5) >=2 ) {
//             obj["2"] = Math.floor((amount % 5) / 2 )
//             if (((amount % 5) % 2) >= 1){
//                 obj["1"] = (amount % 5) % 2 
//             }
//         } else if ((amount % 10) % 5 >= 1) {
//             obj["1"] = Math.floor(((amount % 10) % 5) / 1)
//         }
//     } else if (amount / 2 >= 1) {
//         obj["2"] = Math.floor(amount / 2)
//     } else if (amount / 1 >= 1) {
//         obj["1"] = Math.floor(amount / 1)
//     }
//     return obj
// }
// calculateCoins(111)


//Частый символ
// function frequentSymbol(text) {
//     text = text.split(" ").join("")
//     const arr = {}
//     for (let char of text) {
//         if (arr.hasOwnProperty(char)) {
//             arr[`${char}`] = arr[`${char}`] + 1;
//         } else {
//             arr[`${char}`] = 1;
//         }
//     }
//     const sorted = Object.entries(arr).map(el=>el.reverse()).sort().reverse()
//     return sorted[0][1]
// }
// Примеры вызова функции
// console.log(frequentSymbol('Show Shawn Sharons shabby shoes')); // h


// -------------Нечетный отсев
// function oddElimination(str) {
//     if (str.length > 1) {
//         let tempStr = ''
//         for (let i in str) {
//             if (i % 2 !== 0) {
//                 tempStr = tempStr + str[i]
//             }
//         }
//         return oddElimination(tempStr)
//     }else{
//         return str
//     }
// }

//-----------Заметки для КриптоБота
// const mas1 = ["some1","some2","some3", "some4"]
// const mas2 = ["some1","some2","some4","some5","some6"];
// const diff = (a,b)=> {
//     return a.filter(el=>b.indexOf(el) < 0);
// };
// const resultDelete = diff(mas1,mas2);
// const resultAdd = diff(mas2, mas1);
// console.log("Появились " + resultAdd)
// console.log("Исчезли " + resultDelete)


 //----------------Наибольшее и наименьшее
// function highAndLow(numbers){
//     const max = Math.max.apply(null, numbers.split(" ").map(el=>Number(el)))
//     const min = Math.min.apply(null, numbers.split(" ").map(el=>Number(el)))
//     return `${max} ${min}`
//   }
