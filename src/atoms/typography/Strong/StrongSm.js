import React from "react";

export default function StrongSm(props){
    return(
        <p className="text-sm leading-5 font-medium text-gray-900">
            {props.children}
        </p>
    )
}