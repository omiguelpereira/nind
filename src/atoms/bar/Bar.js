import React from 'react'

export default function Bar(props) {

    let styles = ""

    switch (props.color) {
        case "red":
            styles += " bg-red-50";
            break
        case "green":
            styles += " bg-green-50";
            break
        case "yellow":
            styles += " bg-yellow-50";
            break
        default:
            styles += " bg-gray-50";
            break
    }

    return (
        <header className={`w-full p-3 flex items-center  ${styles} ${props.tail}`}>
            {props.children}
        </header>
    )
}