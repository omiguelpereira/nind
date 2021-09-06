import { defaultParams } from "../constants/avaibleParams";
import { alternativeParams } from '../constants/avaibleParams'

import { propertiesSanitizer } from "./verifierFunctions";
import createStyleObject from "../factories/createStyleObject";
import createClassString from "../factories/createClassString";

export default function addClasses(props,componentName){

    let styleObject = createStyleObject(props, componentName)
    console.log(styleObject)
    styleObject = propertiesSanitizer(styleObject, defaultParams, alternativeParams)
    return createClassString(styleObject)

}