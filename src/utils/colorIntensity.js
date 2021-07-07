export function ColorIntensity(intensityValue = 5, ){

    for(let i = 0; i < 9; i++){
        if(intensityValue === i){
            intensityValue === i*100
            break
        }
    }

    if(intensityValue === 0) intensityValue = 50

    let colors = {
        primary: intensityValue,
        secundary: intensityValue,
    }

    
        let diminisher = 400;
        if(intensityValue - diminisher > 50){
            diminisher -= 50
        }
    

    return intensityValue

    
    
}

const permisedValues = {
    max:{
        primary: 900,
        secundary: 800,
    },
    min:{
        primary: 100,
        secundary: 50,
    },
    default:{
        primary: 500,
        secundary: 100,
    }
}