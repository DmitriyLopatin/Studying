// ---------Задача 1
// let promise = new Promise((rs, rj) => {
//     setTimeout(() => rs(4), 0)
//     Promise.resolve(console.log(3))
//     console.log(2)
// })
// promise
//     .then((rs) => {
//         console.log(rs ? rs ** rs : rs)
//         return rs
//     })
//     .then((rs) => console.log(
//         rs === 256 ? rs : rs * rs
//     ))

//---------Задача 2
// async function abc() {
//     console.log(8)
//     await Promise.resolve(2)
//         .then(console.log)
//     console.log(3)
// }
// setTimeout(() => {
//     console.log(1)
// }, 0)
// abc()
// queueMicrotask(() => {
//     console.log(0)
// })
// Promise.resolve(4)
//     .then(console.log)
// console.log(6)


//------------Задача 3
// console.log(1)
// setTimeout(()=>console.log(2))
// Promise.resolve().then(()=>console.log(3))
// Promise.resolve().then(()=>setTimeout(()=>console.log(4)))
// Promise.resolve(console.log(5)).then(()=>console.log(6))
// setTimeout(()=>console.log(7))
// console.log(8)

// -----------Задача 14
// const P = Promise
// const p1 = P.resolve(1)
// const p2 = P.resolve(2)
// const p3 = P.reject(3)
// const p4 = P.resolve(4)
// const run = async () => {
//     const res1 = await P.all([p1, p2])
//     const res2 = await P.all([p3, p4])
//     return [res1, res2]
// }
// run()
//     .then(v => console.log(v))
//     .catch(e => console.log(e))


// -----------Задача 16
// function delay() {
//     return new Promise(res => setTimeout(res, 2000))
// }
// async function delayedLog(item) {
//     await delay()
//     console.log(item)
// }
// async function process(arr) {
//     arr.forEach((item) => {
//         delayedLog(item)
//     })
//     console.log('Process completed!')
// }
// process([1, 2, 3, 5])

