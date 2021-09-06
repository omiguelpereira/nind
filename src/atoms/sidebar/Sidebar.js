import React from "react";
import addClasses from "../../utils/addClasses";

export default function Header(props){

    let styles = addClasses(props, "sidebar")
    if(!props.width) styles += " max-w-min  "

    return(
        <nav
            className={` h-screen shadow-sm flex flex-col items-center ${props.tail} ${styles} `}
            style={{height:props.height, width: props.width}}>
             {props.children}
        </nav>
    )
  
}