import React from "react";

export default function StrongXl(props){
    return(
        <p className="text-xl leading-5 font-medium text-gray-900">
            {props.children}
        </p>
    )
}