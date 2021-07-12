import React from "react";
import PropTypes, { func } from "prop-types";
import Strong from '../typography/Strong'
import addClasses from "../../utils/addClasses";

export default function Button(props){

    let styles = addClasses(props, "button")
    if(!props.width) styles += " max-w-min  "

    return(
        <button onClick={() => props.click()}
            className={` rounded-md flex justify-center items-center px-5 py-3 ${props.tail} ${styles} `}
            style={{width:props.width,height:props.height}}>
              <Strong type="bodyless" color="white" size={props.size}>
                {props.children}
              </Strong>
        </button>
    )
  
}