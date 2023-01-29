function ucFirst(str) {
  const firstLetter = str[0]?.toUpperCase() || ''
  const rest = str.slice(1)
  const result = firstLetter + rest
  return result
}
