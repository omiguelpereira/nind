import React from "react";

export default function Strong(props) {
    let styles = ""
    switch (props.size) {
        case "sm":
            styles += " text-sm"
            break
        case "md":
            styles += " text-md"
            break
        case "lg":
            styles += " text-lg"
            break
        case "xl":
            styles += " text-xl"
            break
        case "2xl":
            styles += " text-2xl"
            break
        default:
            styles += " text-md"
            break
    }

    return(
        <p className={`flex flex-row gap-1 leading-5 font-medium ${props.tail}`}>
            {props.children}
        </p>
    )
}

