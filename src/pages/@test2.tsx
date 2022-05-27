import { useState } from 'react'

import { tryTwitterUserUrl, tryTwitterUserHandle, tryInstagramUserUrl, tryInstagramUserHandle,  } from 'functions/SocialHelpers'
import { formatUrl } from 'functions/SocialHelpers'

export default function Test2() {
  const [url, setUrl] = useState('')
  const [twitterHandle, setTwitterHandle] = useState(null)
  const [twitterUrl, setTwitterUrl] = useState(null)
  const [url2, setUrl2] = useState(null)

  return (
    <div className="p-5">
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="text-black w-full" />
      <button
        onClick={() => {
          setTwitterHandle(tryInstagramUserHandle(url))
          setTwitterUrl(tryInstagramUserUrl(url))
          setUrl2(formatUrl(url))
        }}
      >
        Extract Twitter handle
      </button>
      <p>handle: {twitterHandle}</p>
      <p>url: {twitterUrl}</p>
      <p>format: {url2}</p>
    </div>
  )
}
