import { avaibleParams } from "./avaibleParams";
import { defaultStyles } from "./defaultStyles";
import { propertiesVerifier } from "./verifierFunctions";
import createStyleObject from "./createStyleObject";
import { createClassString } from "./createClassString";

export default function addClasses(props,type){

    const customClasses = createStyleObject(props, type)

    //propertiesVerifier(customClasses,avaibleParams).then(console.log)
    const ClassesString = createClassString(customClasses)
    if(!props.type) props.type = "default"
    const styles = ClassesString[props.type]

    return styles

}