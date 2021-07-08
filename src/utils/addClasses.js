import { avaibleParams } from "../constants/avaibleParams";
import { defaultStyles } from "../constants/defaultStyles";
import { propertiesVerifier } from "./verifierFunctions";
import createStyleObject from "./createStyleObject";
import createClassString from "./createClassString";

export default function addClasses(props,type){

    const customClasses = createStyleObject(props, type)
    console.log(customClasses)
    const result = propertiesVerifier(customClasses,avaibleParams)
    console.warn(result)
    const ClassesString = createClassString(customClasses)
    if(!props.type) props.type = "default"
    const styles = ClassesString[props.type]

    return styles

}