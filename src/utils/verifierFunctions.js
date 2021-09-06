export function isaValidParam(text, avaibleParams) {
    if(avaibleParams && text)
        return avaibleParams.indexOf(text) > -1 ? true : false  
}

export function propertiesSanitizer(properties, defaultParams, alternativeParams) {
    for (let key in properties) {
        if (typeof properties[key] === 'object')
            propertiesSanitizer(properties[key], defaultParams, alternativeParams)
        else if (!isaValidParam(properties[key], defaultParams[key]) && isaValidParam(properties[key], Object.keys(alternativeParams)))
            properties[key] = alternativeProperties[properties[key]]
        else if (!isaValidParam(properties[key], defaultParams[key]))
            console.log(`${properties[key]} is a invalid param.`)
    }
    return properties
}