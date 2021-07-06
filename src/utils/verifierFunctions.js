export function isaValidParam(text,avaibleParams){
    return (avaibleParams.indexOf(text) > -1)
}

export function propertiesVerifier(properties, avaibleParams){
    for(let key in avaibleParams){
        if(!isaValidParam(properties[key],avaibleParams[key])){
            return {
                sucesses: false,
                message: `${properties[key]} is a invalid param`
            }
        }
    }
    return {sucesses: true, message: "No invalid param found"}
}