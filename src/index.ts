import "./assets/index.css" // 没有用到基础样式，删除即可
//@ts-ignore
import Demo from "./Demo.vue"
import { add } from "./utils"
export { add }
export { Demo }
export function pkg() {
    console.log(111111111)
    add(1, 2)
    console.log(Demo)
}