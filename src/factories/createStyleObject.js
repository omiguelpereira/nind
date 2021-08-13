import { defaultStyles } from "../constants/defaultStyles"
import ColorIntensity from "../utils/colorIntensity"
import colorContrast from "../utils/colorContrast"

export default function createStyleObject(params,type){

    const contrast = colorContrast(params.contrastLevel)
    const colors = ColorIntensity(params.colorIntensity ? params.colorIntensity : defaultStyles[type].colors.primary, contrast)

    let style = {}
    style.colors = {}
    style.colors.color = params.color ? params.color : defaultStyles[type].colors.color
    style.colors.primary = colors.primary ? colors.primary : defaultStyles[type].colors.primary
    style.colors.secundary = colors.secundary ? colors.secundary : defaultStyles[type].colors.secundary
    style.size = params.size ? params.size : defaultStyles[type].size
    style.type = params.type ? params.type : defaultStyles[type].type
    
    return style
}