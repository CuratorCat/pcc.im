
import { CloudIcon, StatusOnlineIcon } from '@heroicons/react/outline'
import { useState } from 'react'


function ImgLoader(ens) {
  if (!ens) return null
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <img
        src={'https://metadata.ens.domains/mainnet/avatar/' + ens}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden"
        onLoad={() => setLoaded(true)}
        alt=""
      />
      
      {loaded ? null : (
        // loading image
        <div className="absolute inset-0">
          <div className="flex h-full bg-black/50 rounded-full overflow-hidden backdrop-blur-sm">
            <p className="m-auto text-center">
              <CloudIcon className="w-8 h-8 text-violet-400/50 animate-pulse" />
            </p>
          </div>
        </div>
      )}
      
    </>
  )
}

export function Avatar(props) {
  if (props.avatar == null) {
    return (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full bg-violet-400/50 rounded-full overflow-hidden backdrop-blur-sm">
            <p className="m-auto text-center">
              <CloudIcon className="w-8 h-8 text-violet-400/50 animate-pulse" />
            </p>
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
    // console.log(props.ens)
    return (
      <>
        {ImgLoader(props.ens)}
      </>
    )
  }
}
