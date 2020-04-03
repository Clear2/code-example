class A {
    constructor(props) {
        this.x = 100
    }
    //这样和构造函数中的this.xxx=xxx没什么区别，设置私有属性(ES7)
    num = 100;
    getX () {
      console.log('x-->', this.x)
    }
}

class B extends A{
    constructor(props) {
        super()
        this.y = 100
    }
    //这样和构造函数中的this.xxx=xxx没什么区别，设置私有属性(ES7)
    getY () {
        console.log(this.y)
    }
}




const b = new B
console.log(b.getX())
