import React from 'react'
import addClasses from '../../utils/addClasses'

export default function Container(props){

    let styles = addClasses(props,"container")
    if(!props.width) styles += " max-w-min  "
    
    return(
        <div className={`rounded-lg shadow ${props.tail} ${styles}`}
            style={{width:props.width, height:props.height}}>
            {props.children}
        </div>
    )
}