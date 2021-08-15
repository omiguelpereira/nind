import { avaibleParams } from "../constants/avaibleParams";
import { defaultStyles } from "../constants/defaultStyles";
import { propertiesVerifier } from "./verifierFunctions";
import createStyleObject from "../factories/createStyleObject";
import createClassString from "../factories/createClassString";

export default function addClasses(props,componentName){

    const customClasses = createStyleObject(props, componentName)
    console.log(customClasses)
    const result = propertiesVerifier(customClasses,avaibleParams)
    console.warn(result)
    const ClassesString = createClassString(customClasses)

    const styles = ClassesString

    return styles

}