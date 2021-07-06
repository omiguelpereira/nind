import { avaibleParams } from "./avaibleParams";
import { defaultStyles } from "./defaultStyles";
import { propertiesVerifier } from "./verifierFunctions";
import createStyleObject from "./createStyleObject";

export default function addClasses(props){

    const customClasses = createStyleObject(props)

    propertiesVerifier(style,avaibleParams).then(console.log)
    

}