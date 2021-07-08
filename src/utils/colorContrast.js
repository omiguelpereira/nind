export default function colorContrast(contrastLevel = 4){

    if(contrastLevel > 9 || contrastLevel < 0){
        console.log("Invalid contrast level was past.")
        console.log("Using default values.")
        contrastLevel = 4;
    }

    for(let i = 0; i < 9; i++){
        if(contrastLevel === i){
            contrastLevel = i*100
            break
        }
    }
    if(contrastLevel === 0) contrastLevel = 50
    return contrastLevel
}