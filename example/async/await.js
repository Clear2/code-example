
const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getNumFruit = fruit => sleep(1000).then(_ => fruitBasket[fruit])

// console.log('------>start')
// getNumFruit('apple').then(num => console.log(num))
// console.log('------>end')

// const control = async _ => {
//     console.log('start')

//     const numApples = await getNumFruit('apple', 1500)
//     console.log('apple--->', numApples)

//     const numGrapes = await getNumFruit('grape', 1000)
//     console.log('grape--->', numGrapes)

//     const numPears = await getNumFruit('pear', 500)
//     console.log('pear --->', numPears)

//     console.log('end')
// }
// control()

// // 验证两个函数,时间短的会不会先返回
// const longSleep = async (ms) => {
//     console.log('long-->start')
//     const numApples = await getNumFruit('apple', ms)
//     console.log('long--->', numApples)
// }

// const shortSleep = async (ms) => {
//     console.log('short-->start')
//     const numApples = await getNumFruit('apple', ms)
//     console.log('short--->', numApples)
// }
// longSleep(2500)
// shortSleep(2000)

const fruitsToGet = ['apple', 'grape', 'pear']

const forEachLoop = _ => {
    console.log('start')
    fruitsToGet.forEach(async fruit => {
        const numFruit = await getNumFruit(fruit, 1000)
        console.log(fruit, '-->', numFruit)
    })
    console.log('End')
}
forEachLoop()
