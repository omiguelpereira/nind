import React from "react";
import PropTypes, { func } from "prop-types";
import Strong from '../typography/Strong'
import addClasses from "../../utils/addClasses";

export default function Button(props){

    const styles = addClasses(props, "button")

    return(
        <button onClick={() => props.click()}
            className={` rounded-md flex justify-center px-5 py-3 ${props.tail} ${styles} `}
            style={{width:props.width,height:props.height}}>
              <Strong size={props.size}>
                {props.children}
              </Strong>
        </button>
    )
  
}