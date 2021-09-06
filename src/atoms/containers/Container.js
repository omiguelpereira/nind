import React from 'react'
import addClasses from '../../utils/addClasses'

export default function Container(props){

    let styles = addClasses(props,"container")
    
    
    return(
        <div className={`rounded-lg  ${props.tail} ${styles}`}
            style={{width:props.width, height:props.height}}>
            {props.children}
        </div>
    )
}