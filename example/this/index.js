
// 第一种写法
btn.onclick =  function anonymous() {
    console.log(this)
}


/** 第二种写法
 function anonymous() {
    console.log(this)
 }
 btn.onclick() = function () {
    anonymous()
 }
 */


// DOM 二级事件绑定
btn.addEventListener('click', function anonymaous() {
    console.log(this)
}, false)

/*  <= IE 6 7 8  DOM2事件绑定
    btn.attachEvent('onclick', function anonyous() {
        console.log(this)
    })

*/


function fn() {
    console.log(this)
}

let obj = {
    name: 'Obj',
    fn: fn
}

fn()
obj.fn()

obj.hasOwnProperty('name')  // => hasOwnProperty 方法中的this -> obj
/**
 * obj.__proto_.hasOwnProperty('namee')  // 相当于检测obj的原型上有没有私有属性  false
 */

/*************************/

function Fn() {
    console.log(this)
}
let f = new Fn;
console.log(f)
