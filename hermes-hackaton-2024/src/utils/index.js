export const updateCssVariable = (cssVar, cssValue) => {
  document.documentElement.style.setProperty(`--${cssVar}`, `${cssValue}`)
}
