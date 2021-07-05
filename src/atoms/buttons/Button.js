import React from "react";
import PropTypes, { func } from "prop-types";
import Strong from '../typography/Strong'

export default function Button(props){

    let styles = ""
    function addNewStyles(){
        switch (props.color){
            case "red":
                styles += " bg-red-600  text-white shadow"
                break;
            case "green":
                styles +=  " bg-green-500  text-white shadow"
                break;
            default:
                styles += "  text-gray-700 border border-gray-300"
                break;
        }
    }

    addNewStyles()

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