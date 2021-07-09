import React from 'react'
import addClasses from '../../utils/addClasses'

export default function Bar(props) {

    const styles = addClasses(props, "Bar") 

    return (
        <header className={`w-full p-3 flex items-center  ${styles} ${props.tail}`}>
            {props.children}
        </header>
    )
}