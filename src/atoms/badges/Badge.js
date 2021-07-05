import React from "react";

export default function Badge(props) {
    let styles = ' flex items-center justify-center font-medium rounded-full '
    if (!props.width) styles += " max-w-min "
    
    function addNewStyles(){
        switch (props.color) {
            case "red":
                styles += "bg-red-100 text-red-800 border border-red-300 "
                break;
            case "yellow":
                styles += "bg-yellow-100 text-yellow-800 border border-red-300 "
                break;
            case "green":
                styles += "bg-green-100 text-green-800 border border-green-300"
                break;
            case "gray":
                styles += "bg-gray-100 text-gray-800 border border-gray-300"
                break;
            default:
                styles += "bg-gray-100 text-gray-800 border border-gray-300"
                break;
        }
    
    
    
        switch (props.size) {
            case "xs":
                styles += " text-xs"
                break;
            case "sm":
                styles += " text-sm"
                break;
            case "md":
                styles += " text-md"
                break;
            case "lg":
                styles += " text-lg"
                break;
            case "xl":
                styles += " text-xl"
                break;
            case "2xl":
                styles += " text-2xl"
                break;
            default:
                styles += " text-md"
                break;
        }
    }

    addNewStyles()

    return (
        <div className={`px-3 py-1 ${styles} ${props.tail}`}
            style={{ width: props.width, height: props.height }}>
            {props.leftIcon}
            <p className="mx-1">{props.content}</p>
            {props.rightIcon}
        </div>
    )




}