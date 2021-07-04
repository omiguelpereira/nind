import React from 'react'

export default function Container(props){
    let styles = ""
    if(!props.width) styles += " max-w-min  "
    switch (props.type){
        case "outline":
            styles += " rounded-md border border-gray-200"
            break;
        case "disable":
            styles += " rounded-md bg-gray-100";
            break;
        default:
            styles += " rounded-lg shadow"
            break;
    }
    return(
        <div className={`p-4 ${props.tail} ${styles}`}
            style={{width:props.width, height:props.height}}>
            {props.children}
        </div>
    )
}