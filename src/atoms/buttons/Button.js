import React from "react";
import PropTypes, { func } from "prop-types";
import Strong from '../typography/Strong'

export default function Button(props){

    let styles = ""
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

/*

return(
        <button onClick={() => props.click()}
            className={` flex justify-center px-5 py-3 border-gray-300 text-gray-700 rounded-md shadow ${props.tail}`}
            style={{width:props.width,height:props.height}}>
               {props.size === "xl" &&
                    <Strong size={props.size}>
                        {props.children}
                    </Strong>
               }
               {props.size === "lg" &&
                    <Strong size={props.size}>
                        {props.children}
                    </Strong>
               }
               {props.size === "sm" &&
                    <Strong size={props.size}>
                        {props.children}
                    </Strong>
               }
               {props.size === "2xl" &&
                    <Strong size={props.size}>
                        {props.children}
                    </Strong>
               }
        </button>
    )

*/