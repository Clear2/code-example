import 'reflect-metadata'
import { parseScript } from "esprima"

interface IIndexService {
    log (str: string): void
}

interface ITypes {
    [key: string]: Symbol
}
const Types: ITypes = {
    "indexService": Symbol.for("indexService")
}
// 数据提供方
class IndexService implements IIndexService{
    log(str: string) {
        console.log('😇😇😇😇😇😇😇😇😇😊😊🙂', str)
    }
}

// 只能对构造函数进行赋值
function inject(serviceIdentifer: Symbol) {
    console.log("step1", "我进入")
    return (target: Object, targetKey: string, index: number) => {
        if (!targetKey) {
            // target["indexService"] = new IndexService()
            // target["qqq"] = 1223
            Reflect.defineMetadata(serviceIdentifer, new IndexService(), target)
        }
    }
}
function hasKey<> {

}

function controller<T extends { new (...args: any[]):{} }>(constructor: T) {
    //
    console.log('对类进行修饰的参数')
    class Controller extends constructor {
        constructor(...args: any[]) {
            super(args);
            // 通过ast获取到函数参数名
           const injectParams = getParams(constructor)
            let identity: string
            for (identity of injectParams) {
                this[identity] = Reflect.getMetadata(Types[identity])
            }
            // console.log(construct["qq"])
        }
    }
    return Controller
}

function getParams(fn: Function) {
    let ast = parseScript(fn.toString())
    let funcParams: any[] = []

    console.log('🌲', funcParams)
    let node = ast.body[0]
    if (node.type === "FunctionDeclaration") {
        funcParams = node.params
    }
    let validParams: string[] = []
    funcParams.forEach(obj => {
        if (obj.type === 'Identifier') {
            validParams.push(obj)
        }
    })
    return validParams
}
// 路由
@controller
class IndexController {
    private indexService: IndexService;
    // 对参数进行增强
    constructor(@inject(Types.indexService) indexService: IIndexService) {
        this.indexService = indexService
    }
    info () {
        this.indexService.log("")
    }
}

// 傻瓜写法
// const indexService = new IndexService()
// const indexController = new IndexController(indexService)
// indexController.info()

// 无侵入式的
// const index = new IndexController(null)
// index.info()

// 进行更深层次的 IOC
