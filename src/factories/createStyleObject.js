import { defaultStyles } from "../constants/defaultStyles"
import ColorIntensity from "../utils/colorIntensity"
import colorContrast from "../utils/colorContrast"

export default function createStyleObject(params,componentName){

    const contrast = colorContrast(params.contrastLevel)
    const colors = ColorIntensity(params.colorIntensity ? params.colorIntensity : defaultStyles[componentName].colorIntensity.strongTone, contrast)

    let style = {}
    style.color = {}
    style.colorIntensity ={}

    style.type = defaultStyles[componentName].type
    style.color = params.color ? params.color : defaultStyles[componentName].color
    style.colorIntensity.strongTone = colors.primary ? colors.primary : defaultStyles[componentName].colorIntensity.strongTone
    style.colorIntensity.weakerTone = colors.secundary ? colors.secundary : defaultStyles[componentName].colorIntensity.weakerTone
    style.size = params.size ? params.size : defaultStyles[componentName].size
    style.fill = params.fill ? params.fill : defaultStyles[componentName].fill
   
    if(defaultStyles[componentName].type === "typographic"){
        style.font = {}
        style.font.size = params.size ? params.size : defaultStyles[componentName].font.size
        style.font.weight = params.weight ? params.weight : defaultStyles[componentName].font.weight
        style.font.spacing = params.spacing ? params.spacing : defaultStyles[componentName].font.spacing    
    }

    return style

}