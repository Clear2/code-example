class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer (data) {
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key])
            })
        }
    }

    defineReactive(obj, key, value) {
        this.observer(value)
        Object.defineProperty(obj, key, {
            get () {
                return value
            },
            set(newV) {
                if (newV === value) return
                this.observer(newV)
                value = newV
            }
        })
    }
}