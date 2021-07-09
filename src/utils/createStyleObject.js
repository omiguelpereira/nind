import { defaultStyles } from "../constants/defaultStyles"
import ColorIntensity from "./colorIntensity"
import colorContrast from "./colorContrast"

export default function createStyleObject(params,type){

    const contrast = colorContrast(params.contrastLevel)
    const colors = ColorIntensity(params.colorIntensity, contrast)

    let style = {}
    style.colors = {}
    style.colors.color = params.color ? params.color : defaultStyles[type].colors.color
    style.colors.primary = colors.primary
    style.colors.secundary = colors.secundary
    style.size = params.size ? params.size : defaultStyles[type].size
    style.outline = params.outline ? params.outline : defaultStyles[type].outline
    style.bodyless = params.bodyless ? params.bodyless : defaultStyles[type].bodyless
    style.dualtone = params.dualtone ? params.dualtone : defaultStyles[type].dualtone
    
    return style
}