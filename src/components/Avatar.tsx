import { useState } from 'react'


function ImgLoader(ens) {
  const [loaded, setLoaded] = useState(false)
  // console.log("src", ens)

  return (
    <>
      <img
        src={'https://metadata.ens.domains/mainnet/avatar/' + ens}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden"
        onLoad={() => setLoaded(true)}
        alt=""
      />
      
      {loaded ? null : (
        <div className="absolute inset-0">
          <div className="flex h-full bg-violet-400 rounded-full overflow-hidden">
            <p className="m-auto text-center animate-pulse">loading</p>
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
          <div className="flex h-full bg-gray-200/50 rounded-full overflow-hidden animate-pulse">
            <div className="m-auto text-center">checking avatar</div>
          </div>
        </div>
      </div>
    )
  } else if (props.avatar === '') {
    return (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full bg-black/20">
            <div className="m-auto text-center">no avatar</div>
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
