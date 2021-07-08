export function ColorIntensity(intensityValue = 5, contrastLevel = 400 ){

    for(let i = 0; i < 9; i++){
        if(intensityValue === i){
            intensityValue = i*100
            break
        }
    }

    if(intensityValue === 0) intensityValue = 50

    //while(intensityValue-contrastLevel < 50) contrastLevel-50

    let colors = {
        primary: intensityValue,
        secundary: intensityValue-contrastLevel,
    }

    return colors
}
