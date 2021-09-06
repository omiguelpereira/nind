import React from "react";
import addClasses from "../../utils/addClasses";
export default function Label(props) {  
    
    const styles = addClasses(props,"label")

    return(
        <p className={`leading-2 ${props.tail} ${styles}`}>
            {props.children}
        </p>
    )
}


