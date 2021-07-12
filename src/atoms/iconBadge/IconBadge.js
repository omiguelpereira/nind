import React from 'react'
import addClasses from '../../utils/addClasses'

export default function IconBadge(props){

    let styles = addClasses(props, "IconBadge")
    if(!props.width) styles += " max-w-min  "
 

    return(
        <div className={`fill-current rounded-lg flex justify-center items-center ${styles} ${props.tail} p-1 `}
        style={{width:props.width,height:props.height}}>
            {props.icon}
        </div>
    )
}