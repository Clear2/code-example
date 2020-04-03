// ~function  (proto) {
//     function bind(context) {
//         console.log('------>PX', this)
//         if (context == undefined) {
//             //context maybe null or undefined
//             context = window
//         }
//         // arguments{ 0: window, 1: 10,  2:20}
//         // 获取传递的实参集合
//         var args = [].slice.call(arguments, 1)
//         var _this = this
//         return function anonymous() {
//             _this.apply(context, args)
//
//         }(args)
//     }
//     proto.bind = bind
//
// }(Function.prototype)

let obj = {
    fn(x, y) {
        console.log(this, x, y)
    }
}

// setTimeout(obj.fn, 1000)

// setTimeout(obj.fn(10, 100), 1000)

// setTimeout(obj.fn.bind(window, 10, 100), 1000)

// document.body.onclick = obj.fn.bind(window, 100, 20)


~function (proto) {
    // 请注意 this这里三种写法的指向问题
   // function bind () {
   //
   //
   // }

   // const bind = function () {
   //     console.log(this)
   // }
   // const bind = () => {
   //     console.log(this)
   // }

    function call (context, ...args) {
        context.$fn = this
        let result = context.$fn(...args)
        delete context.$fn
        // this 需要执行的函数
        return result
    }
    proto.call = call
}(Function.prototype)

setTimeout(obj.fn.call(window, 10, 100), 1000)

~function(){
    console.log(this)
}(Function.prototype)

let o = {
    fn: function () {
        console.log('o, fn')
    }
}
o.fn

