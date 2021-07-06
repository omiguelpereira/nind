import { defaultStyles } from "./defaultStyles"

export default function createStyleObject(params,type){
    let style = {}
    
    style.color = params.color ? params.color : defaultStyles[type].color
    style.size = params.size ? params.size : defaultStyles[type].size
    style.outline = params.outline ? params.outline : defaultStyles[type].outline
    style.bodyless = params.bodyless ? params.bodyless : defaultStyles[type].bodyless
    style.dualtone = params.dualtone ? params.dualtone : defaultStyles[type].dualtone
    
    return style
}