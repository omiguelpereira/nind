import React from "react";

export default function Strong2Xl(props){
   if(props.size === "sm"){
    return(
        <p className={`flex flex-row gap-1 text-md leading-5 font-medium ${props.tail}`}>
            {props.children}
        </p>
    )
   }
   else if(props.size === "lg"){
    return(
        <p className={`flex flex-row gap-1 text-xl leading-5 font-medium ${props.tail}`}>
            {props.children}
        </p>
    )
   }
   else if(props.size === "xl"){
    return(
        <p className={`flex flex-row gap-1 text-2xl leading-5 font-medium ${props.tail}`}>
            {props.children}
        </p>
    )
   }
   else if(props.size === "2xl"){
    return(
        <p className={`flex flex-row gap-1 text-3xl leading-5 font-medium ${props.tail}`}>
            {props.children}
        </p>
    )
   }
}