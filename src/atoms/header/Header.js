import React from "react";
import addClasses from "../../utils/addClasses";

export default function Header(props){

    let styles = addClasses(props, "header")

    return(
        <header
            className={` w-full shadow-sm flex items-center ${props.tail} ${styles} `}
            style={{height:props.height}}>
             {props.children}
        </header>
    )
  
}