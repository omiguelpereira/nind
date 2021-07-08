export function isaValidParam(text,avaibleParams){
    return (avaibleParams.indexOf(text) > -1)
}

export function propertiesVerifier(properties, avaibleParams){
    for(let key in avaibleParams){
        if(!isaValidParam(properties[key],avaibleParams[key])){
            return {
                message: `${properties[key]} is a invalid param`
            }
        }
    }
    return {message: "No invalid param found"}
}