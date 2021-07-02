import React from "react";
import PropTypes, { func } from "prop-types";

export default function Button(props){
    return(
        <button onClick={() => props.click()}
            className={` flex flex-shrink-0 flex-grow-0 h-auto w-auto py-2 px-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-lg hover:scale-101 transition duration-300 ease-in-out items-center justify-around ${props.tail}`}
            style={{width:props.width,height:props.height}}>
                {props.children}
        </button>
    )
}