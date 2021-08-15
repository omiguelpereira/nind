import { defaultStyles } from "../constants/defaultStyles"
import ColorIntensity from "../utils/colorIntensity"
import colorContrast from "../utils/colorContrast"

export default function createStyleObject(params,componentName){

    const contrast = colorContrast(params.contrastLevel)
    const colors = ColorIntensity(params.colorIntensity ? params.colorIntensity : defaultStyles[componentName].colors.primary, contrast)

    let style = {}
    style.colors = {}
    style.font = {}

    style.type = defaultStyles[componentName].type
    style.colors.color = params.color ? params.color : defaultStyles[componentName].colors.color
    style.colors.primary = colors.primary ? colors.primary : defaultStyles[componentName].colors.primary
    style.colors.secundary = colors.secundary ? colors.secundary : defaultStyles[componentName].colors.secundary
    style.size = params.size ? params.size : defaultStyles[componentName].size
    style.fill = params.fill ? params.fill : defaultStyles[componentName].fill
   
    if(defaultStyles[componentName].type === "typographic"){
        style.font.size = params.size ? params.size : defaultStyles[componentName].font.size
        style.font.weight = params.weight ? params.weight : defaultStyles[componentName].font.weight
        style.font.spacing = params.spacing ? params.spacing : defaultStyles[componentName].font.spacing    
    }

    return style

}