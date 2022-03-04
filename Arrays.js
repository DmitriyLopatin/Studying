// ----------Деструктуризация--------
// Пример деструктуризации массива:

let [firstName, lastName] = ["Илья", "Кантор"];
// console.log(firstName); // Илья
// console.log(lastName);  // Кантор

// --------Методы массивов----------

//---------every---------(проверяет каждый элемент массива на условия, выводит true/false)
let arr = [1,4,6,3,7,2]
console.log(arr.every(elem=>elem == arr[0]))
console.log(arr.reduce((elem,sum,index,array)=>elem+sum))

//---------splice-------(password example)
let password = [0,0,0,0,0]
for(let i = 0;i<100000;i++){ //ном. инд.,с которого нач.удаление,   сколь удалять, что добовлять
	                        password.splice(5 - String(i).length,  String(i).length,     i      )
	console.log(password.join(''))
}
