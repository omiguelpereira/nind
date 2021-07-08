export function createClassString (styles) {
    const alternativeStyles = {}
    
    alternativeStyles.outline = `text-${styles.colors.color}-${styles.colors.primary} border border-${styles.colors.color}-${styles.colors.primary}`
    alternativeStyles.bodyless = `text-${styles.colors.color}-${styles.colors.primary}`
    alternativeStyles.dualtone = `text-${styles.colors.color}-${styles.colors.primary} bg-${styles.colors.color}-${styles.colors.secundary}`
    alternativeStyles.default = `text-white bg-${styles.colors.color}-${styles.colors.primary}`
    
    return alternativeStyles
}