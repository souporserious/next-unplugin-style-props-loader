module.exports = function (source) {
  const colorAttributeRegex = /<Box color="([^"]+)"/g
  let match
  let hasColorAttribute = false
  let modifiedSource = source

  while ((match = colorAttributeRegex.exec(source)) !== null) {
    hasColorAttribute = true
    const colorValue = match[1] // Capture the dynamic color value

    modifiedSource = modifiedSource.replace(
      `<Box color="${colorValue}"`,
      `<Box className={css(\`color: ${colorValue};\`)}`
    )
  }

  if (hasColorAttribute) {
    return `import { css } from '../macro' with {type: 'macro'};\n${modifiedSource}`
  }

  return source
}
