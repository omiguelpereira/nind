import { avaibleParams } from "../constants/avaibleParams";
import { defaultStyles } from "../constants/defaultStyles";
import { propertiesVerifier } from "./verifierFunctions";
import createStyleObject from "../factories/createStyleObject";
import createClassString from "../factories/createClassString";

export default function addClasses(props,type){

    const customClasses = createStyleObject(props, type)
    console.log(customClasses)
    const result = propertiesVerifier(customClasses,avaibleParams)
    console.warn(result)
    const ClassesString = createClassString(customClasses)
    let componentType = props.type ? props.type : "default"

    const styles = ClassesString[componentType]

    return styles

}