export const toPersianDigit = (input?: string) => {
  var inputs = '' + input
  const new_val = inputs
    .replace(/0/g, '۰')
    .replace(/1/g, '۱')
    .replace(/2/g, '۲')
    .replace(/3/g, '۳')
    .replace(/4/g, '۴')
    .replace(/5/g, '۵')
    .replace(/6/g, '۶')
    .replace(/7/g, '۷')
    .replace(/8/g, '۸')
    .replace(/9/g, '۹')
    .replace(/٤/g, '۴')
    .replace(/٥/g, '۵')
    .replace(/٦/g, '۶')
  return new_val
}

export const Decode = (input?: string) => {
  if (!input) return ''
  return input.replace(/[\x80-\uffff]/g, m => `%${m.charCodeAt(0).toString(16).padStart(2, '0')}`)
}

export const Encode = (input?: string) => {
  if (!input) return ''
  return encodeURIComponent(input).replace(/%([a-f0-9]{2})/gi, (m, $1) => String.fromCharCode(parseInt($1, 16)))
}
