export const fixArabicText = (text?: string | null) => {
  if (!text) return ''
  text = text.replace(/\u0643/g, '\u06A9') // ک
  text = text.replace(/\u0649/g, '\u06CC') // ی
  text = text.replace(/\u064A/g, '\u06CC') // ی

  return text
}
