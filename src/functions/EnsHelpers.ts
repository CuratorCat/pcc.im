export function maybeEns(str) {
  const dot = /[.]/
  const invalidChars = /[`~!@#$%^&()+[\]_'",;{}<> ]/
  return dot.test(str) && !invalidChars.test(str) && str.charAt(0) != '.' && str.substr(str.length - 1) != '.'
    ? true
    : false
}