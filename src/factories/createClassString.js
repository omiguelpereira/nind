export default function createClassString (styles) {
    
    const alternativeStyles = {}
    
    alternativeStyles.outline = `text-${styles.colors.color}-${styles.colors.primary} border border-${styles.colors.color}-${styles.colors.primary}`
    alternativeStyles.bodyless = `text-${styles.colors.color}-${styles.colors.primary}`
    alternativeStyles.dualtone = `text-${styles.colors.color}-${styles.colors.primary} bg-${styles.colors.color}-${styles.colors.secundary} ${styles.size ? `text-${styles.size}` : ""}`
    alternativeStyles.default = `text-white bg-${styles.colors.color}-${styles.colors.primary} ${styles.size ? `text-${styles.size}` : ""}`

    if(styles.type === "typographic") return alternativeStyles[styles.fill].concat(` text-${styles.font.size} font-${styles.colors.weight} tracking-${styles.colors.spacing} `)

    return alternativeStyles[styles.fill]

}