export function isValidUrl(string) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(string) ? true : false
}

export function isHttpProtocol(string) {
  if (!string) return false
  const urlMatch = string.match(/^https?:\/\//)
  return urlMatch ? true : false
}

export function formatUrl(url) {
  if (!url) return null
  return isHttpProtocol(url) ? `https://${url.replace(/^https?:\/\//, '')}` : `https://${url}`
}

export function isInstagramUrl(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/@?([A-Za-z0-9-_\.]+)/im)
  return match ? true : false
}

export function extractInstagramHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/@?([A-Za-z0-9-_\.]+)/im)
  return match ? match[1] : null
}

export function isTwitterUserUrl(string) {
  if (!string) return false
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:twitter\.com)\/@?([A-Za-z0-9_]+)/im)
  return match ? true : false
}

export function extractTwitterHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:twitter\.com)\/@?([A-Za-z0-9_]+)/im)
  return match ? match[1] : null
}

export function tryTwitterUserUrl(string) {
  if (!string) return null
  if (isTwitterUserUrl(string)) return `https://twitter.com/${extractTwitterHandle(string)}`

  if (isValidUrl(string)) {
    if (isHttpProtocol(string)) {
      return formatUrl(string)
    } else {
      return `https://${string}`
    }
  }
  return `https://twitter.com/${string}`
}

export function tryTwitterUserHandle(string) {
  if (!string) return null
  if (isTwitterUserUrl(string)) return extractTwitterHandle(string)
  return `${string}`
}

export function tryInstagramUserHandle(string) {
  if (!string) return null
  if (isInstagramUrl(string)) return extractInstagramHandle(string)
  return `${string}`
}

export function tryInstagramUserUrl(string) {
  if (!string) return null
  if (isInstagramUrl(string)) return `https://instagram.com/${extractInstagramHandle(string)}`
  if (isHttpProtocol(string)) return formatUrl(string)
  return `https://instagram.com/${string}`
}
