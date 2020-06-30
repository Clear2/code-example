const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')

const code = `function getUser() {}`

// 生成 AST
const ast = esprima.parseScript(code)

// 转换 AST，只会遍历 type 属性
// traverse 方法中有进入和离开两个钩子函数
estraverse.traverse(ast, {
    
    enter(node) {
        console.log('enter -> node.type,', node.type)
        // 进入和离开都是可以修改的
        if (node.type === 'Identifier') {
            node.name = 'hello'
        }

    },
    leave (node) {
        console.log('leval -> node.type,', node.type)
    }
})

const result = escodegen.generate(ast)

console.log(result)