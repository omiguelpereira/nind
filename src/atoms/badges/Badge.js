import React from "react";
import addClasses from "../../utils/addClasses";
import Label from '../typography/Label'


export default function Button(props){

    let styles = addClasses(props, "badge")
    if(!props.width) styles += " max-w-min  "

    return(
        <label
            className={`truncate rounded-full flex justify-center items-center px-3 py-1 ${props.tail} ${styles} `}
            style={{width:props.width,height:props.height}}>
            <Label type="bodyless" color={props.color} size={props.size}>
                {props.text}
            </Label>
        </label>
    )
  
}