const utils = require('./utils')


class Element {
    constructor(tagName, attrs, children) {
        this.tagName = tagName
        this.attrs = attrs
        this.children = children || []
    }

    render() {
        // 创建真实节点
        let element = document.createElement(this.tagName)

        // 给节添加属性
        for (let attr in this.attrs) {
            utils.setArr(element, attr, this.attrs[attr])
        }

        // 深度优先
        this.children.forEach((child) => {
            console.log(child instanceof Element, child)
           let childElement = child instanceof Element ? child.render() : document.createTextNode(child)
            element.appendChild(childElement)
        })
        return element
    }

}

function createElement (tagName, attrs, children) {
    return new Element(tagName, attrs, children)
}

module.exports = {
    createElement
}