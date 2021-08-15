import React from "react";
import addClasses from "../../utils/addClasses";
export default function Strong(props) {  
    
    const styles = addClasses(props,"label")

    return(
        <p className={`flex flex-row gap-1 leading-5 font-medium ${props.tail} ${styles}`}>
            {props.children}
        </p>
    )
}


