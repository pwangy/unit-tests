export const hashtags = (text) => {
  const hashFilter = /\u{23}\w+/gu
  return text.match(hashFilter)
}