// Задача:
// У тебя есть массив объектов, представляющих заказы в интернет-магазине. Каждый заказ содержит информацию о товаре и его цене. Твоя цель — рассчитать общую сумму всех товаров в корзине с учетом количества.
const orders = [
  { item: "Laptop", price: 1500, quantity: 1 },
  { item: "Phone", price: 700, quantity: 2 },
  { item: "Headphones", price: 200, quantity: 4 },
]

const sum = orders.reduce((acc, item) => acc + item.price * item.quantity, 0)


// Задача:
// У тебя есть массив строк, представляющий список пользователей и их действий на сайте. Тебе нужно использовать reduce, чтобы построить объект, в котором ключами будут имена пользователей, а значениями — массивы их действий, отсортированные по времени.
const logs = [
  { user: "Alice", action: "login", time: "2023-11-07T08:45:00Z" },
  { user: "Bob", action: "viewed_page", time: "2023-11-07T09:00:00Z" },
  { user: "Alice", action: "logout", time: "2023-11-07T09:30:00Z" },
  { user: "Bob", action: "login", time: "2023-11-07T08:50:00Z" },
  { user: "Alice", action: "viewed_page", time: "2023-11-07T08:55:00Z" },
]
// {
//   Alice: [
//     { action: "login", time: "2023-11-07T08:45:00Z" },
//     { action: "viewed_page", time: "2023-11-07T08:55:00Z" },
//     { action: "logout", time: "2023-11-07T09:30:00Z" },
//   ],
//   Bob: [
//     { action: "login", time: "2023-11-07T08:50:00Z" },
//     { action: "viewed_page", time: "2023-11-07T09:00:00Z" },
//   ],
// }

const usersArr = logs.reduce((acc, el, index, arr) => {

  acc[el.user] = arr
    .filter(item => item.user == el.user)
    .map(a => {
      const { user, ...rest } = a; // Убираем поле `user`, возвращая остальные данные
      return rest;
    })
    .sort((a, b) => new Date(a.time) - new Date(b.time))
  return acc

}, {})
console.log(usersArr)

