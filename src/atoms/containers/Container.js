import React from 'react'

export default function Container(props){
    let styles = ""
    if(!props.width) styles += " max-w-min  "
    
    function addNewStyles(){
        switch (props.type){
            case "outline":
                styles += " rounded-md border border-gray-200 "
                break;
            case "gray":
                styles += " rounded-md bg-gray-100 ";
                break;
            default:
                styles += " rounded-lg shadow "
                break;
        }
    }

    addNewStyles()

    return(
        <div className={`${props.tail} ${styles}`}
            style={{width:props.width, height:props.height}}>
            {props.children}
        </div>
    )
}