class Vue {
    constructor(options) {
        this.$el = options.el
        this.$data = options.data
        this.$options = options

        new IntersectionObserver(this)
        // 触发this.$data.xx 和 模板的绑定
        this.proxyData(this.$data)
    }

    proxyData (data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set (newV) {
                    console.log('set--->>', newV)
                    data[key] = newV
                }
            })
        })
    }
}