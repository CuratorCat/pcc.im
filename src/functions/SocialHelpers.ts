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
  if (!url) return ''
  return isHttpProtocol(url) ? `https://${url.replace(/^https?:\/\//, '')}` : `https://${url}`
}

// twitter
export function isTwitterUserUrl(string) {
  if (!string) return false
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:twitter\.com)\/@?([a-z0-9_]+)/i)
  return match ? true : false
}

export function extractTwitterHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:twitter\.com)\/@?([a-z0-9_]+)/i)
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
  return `https://twitter.com/${string.replace(/^@/, '')}`
}

export function tryTwitterUserHandle(string) {
  if (!string) return null
  if (isTwitterUserUrl(string)) return extractTwitterHandle(string)
  return `${string}`
}

// instagram
export function isInstagramUrl(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/@?([a-z0-9-_\.]+)/i)
  return match ? true : false
}

export function extractInstagramHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/@?([a-z0-9-_\.]+)/i)
  return match ? match[1] : null
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

// telegram
export function isTelegramUserUrl(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:t\.me)\/@?([a-z0-9_]+)/i)
  return match ? true : false
}

export function extractTelegramHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:t\.me)\/@?([a-z0-9_]+)/i)
  return match ? match[1] : null
}

export function tryTelegramUserHandle(string) {
  if (!string) return null
  if (isTelegramUserUrl(string)) return extractTelegramHandle(string)
  return `${string}`
}

export function tryTelegramUserUrl(string) {
  if (!string) return null
  if (isTelegramUserUrl(string)) return `https://t.me/${extractTelegramHandle(string)}`
  if (isValidUrl(string)) return formatUrl(string)
  return `https://t.me/${string.replace(/^@/, '')}`
}

// tiktok
export function isTiktokUrl(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:tiktok\.com)\/@?([a-z0-9-\.]+)/i)
  return match ? true : false
}

export function extractTiktokHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:tiktok\.com)\/@?([a-z0-9-\.]+)/i)
  return match ? match[1] : null
}

export function tryTiktokUserHandle(string) {
  if (!string) return null
  if (isTiktokUrl(string)) return extractTiktokHandle(string)
  return `${string}`
}

export function tryTiktokUserUrl(string) {
  if (!string) return null
  if (isTiktokUrl(string)) return `https://tiktok.com/${extractTiktokHandle(string)}`
  if (isHttpProtocol(string)) return formatUrl(string)
  return `https://tiktok.com/${string}`
}

// github
export function isGithubUserUrl(string) {
  if (!string) return false
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:github\.com)\/([a-z0-9-]+)/i)
  return match ? true : false
}

export function extractGithubHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:www\.)?(?:github\.com)\/([a-z0-9-]+)/i)
  return match ? match[1] : null
}

export function tryGithubUserHandle(string) {
  if (!string) return null
  if (isGithubUserUrl(string)) return extractGithubHandle(string)
  return `${string}`
}

export function tryGithubUserUrl(string) {
  if (!string) return null
  if (isGithubUserUrl(string)) return `https://github.com/${extractGithubHandle(string)}`
  if (isHttpProtocol(string)) return formatUrl(string)
  return `https://github.com/${string.replace(/^@/, '')}`
}

// linkedin
export function isLinkedinUrl(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:[a-z]{2,3}\.)?(?:linkedin\.[a-z]{2,3})\/(?:in\/)?@?([a-z0-9-_.]+)/i)
  return match ? true : false
}

export function extractLinkedinHandle(string) {
  if (!string) return null
  const match = string.match(/(?:(?:http|https):\/\/)?(?:[a-z]{2,3}\.)?(?:linkedin\.[a-z]{2,3})\/(?:in\/)?@?([a-z0-9-_.]+)/i)
  return match ? match[1] : null
}

export function tryLinkedinHandle(string) {
  if (!string) return null
  if (isLinkedinUrl(string)) return extractLinkedinHandle(string)
  return `${string}`
}

export function tryLinkedinUserUrl(string) {
  if (!string) return null
  if (isLinkedinUrl(string)) return `https://linkedin.com/in/${extractLinkedinHandle(string)}`
  if (isHttpProtocol(string)) return formatUrl(string)
  return `https://linkedin.com/in/${string.replace(/^@/, '')}`
}