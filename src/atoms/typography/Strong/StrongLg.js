import React from "react";

export default function StrongLg(props){
    return(
        <p className="text-lg leading-5 font-medium text-gray-900">
            {props.children}
        </p>
    )
}