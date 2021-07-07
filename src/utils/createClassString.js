export function createClassString (styles) {
    const alternativeStyles = {
        outline: `text-${styles.colors.color}-${styles.colors.primary} border border-${styles.colors.color}-${styles.colors.primary}`,
        bodyless: `text-${styles.colors.color}-${styles.colors.primary}`,
        dualtone: `text-${styles.colors.color}-${styles.colors.primary} bg-${styles.colors.color}-${styles.colors.secundary}`
    }
    return alternativeStyles
}