import { CloudIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { isHttpProtocol, formatUrl } from 'functions/SocialHelpers'
export function Avatar(props) {
  if (props.avatar == null) {
    return (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-4 w-4 m-auto bg-violet-400 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    )
  } else if (props.avatar === '') {
    return (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full bg-black/20">
            <div className="m-auto text-center p-3 text-violet-400/25 font-semibold">no avatar</div>
          </div>
        </div>
      </div>
    )
  } else {
    return <>{ImgLoader(props.ens, props.catId, props.avatar)}</>
  }
}

function ImgLoader(ens, catId, avatar) {
  if (!ens) return null
  const [loaded, setLoaded] = useState(false)

  const avatarUrl = catId
    ? // use special url for PCC Cats for faster loading ux
      'https://raw.githubusercontent.com/CuratorCat/pcc-cats-jpg/main/w1000/' + catId + '.jpg'
    : isHttpProtocol(avatar)
    ? // use direct https for http protocol
      formatUrl(avatar)
    : // use metadata.ens.domains for others
      'https://metadata.ens.domains/mainnet/avatar/' + ens

  return (
    <>
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full">
        <img
          src={avatarUrl}
          className="w-full h-full rounded-full overflow-hidden"
          onLoad={() => setLoaded(true)}
          alt=""
        />
      </div>
      {loaded ? null : (
        // loading image
        <div className="absolute inset-0">
          <div className="flex h-full bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
            <p className="m-auto text-center">
              <CloudIcon className="w-8 h-8 text-violet-400 animate-pulse" />
            </p>
          </div>
        </div>
      )}
    </>
  )
}
