// https://github.com/devongovett/unplugin-parcel-macros/blob/aa1c6793be6baec17211236ed24c64d20c5b6202/examples/next/macro.js

exports.css = function css(css) {
  let className = '_' + hash(css).toString(36)
  css = `.${className} {
    ${css}
  }`
  if (typeof this?.addAsset === 'function') {
    this.addAsset({
      type: 'css',
      content: css,
    })
  }
  return className
}

// djb2 hash function.
// http://www.cse.yorku.ca/~oz/hash.html
function hash(v) {
  let hash = 5381
  for (let i = 0; i < v.length; i++) {
    hash = ((hash << 5) + hash + v.charCodeAt(i)) >>> 0
  }
  return hash
}
