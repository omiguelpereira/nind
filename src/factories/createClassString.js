export default function createClassString (styles) {
    
    const alternativeStyles = {}
    
    alternativeStyles.outline = `text-${styles.color}-${styles.colorIntensity.strongTone} border border-${styles.color}-${styles.colorIntensity.primary}`
    alternativeStyles.bodyless = `text-${styles.color}-${styles.colorIntensity.strongTone}`
    alternativeStyles.dualtone = `text-${styles.color}-${styles.colorIntensity.strongTone} bg-${styles.color}-${styles.colorIntensity.weakerTone} }`
    alternativeStyles.default = `bg-${styles.color}-${styles.colorIntensity.strongTone} `

    if(styles.type === "typographic") return alternativeStyles[styles.fill].concat(` text-${styles.font.size} font-${styles.font.weight} tracking-${styles.font.spacing} `)

    return alternativeStyles[styles.fill]

}