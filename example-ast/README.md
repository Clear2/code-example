```
Script {
  type: 'Program',
  body: [
    FunctionDeclaration {
      type: 'FunctionDeclaration',
      id: [Identifier],
      params: [],
      body: [BlockStatement],
      generator: false,
      expression: false,
      async: false
    }
  ],
  sourceType: 'script'
}
```

### AST解析流程

- esprima:      code => ast         code转化为ast
- estraverse:   traverse => ast     转化树
- escodegen:    ast => code         


