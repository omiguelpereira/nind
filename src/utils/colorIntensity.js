export function ColorIntensity(intensityValue = 5, contrastLevel ){

    for(let i = 0; i < 9; i++){
        if(intensityValue === i){
            intensityValue === i*100
            break
        }
    }

    if(intensityValue === 0) intensityValue = 50

    while(intensityValue-contrastLevel < 50) contrastLevel-10

    let colors = {
        primary: intensityValue,
        secundary: intensityValue-contrastLevel,
    }

    return intensityValue
}
