import { useState } from 'react'


function ImgLoader(ens) {
  const [loaded, setLoaded] = useState(false)
  console.log("src", ens)

  return (
    <div>
      <img
        src={'https://metadata.ens.domains/mainnet/avatar/' + ens}
        className="absolute w-full h-full rounded-xl overflow-hidden"
        onLoad={() => setLoaded(true)}
        alt=""
      />
      
      {loaded ? null : (
        <div className="absolute inset-0">
          <div className="flex h-full bg-gray-200 rounded-xl overflow-hidden">
            <div className="m-auto text-center animate-pulse">loading</div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export function Avatar(props) {
  if (props.avatar == null) {
    return (
      <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full bg-gray-200/50 rounded-xl overflow-hidden animate-pulse">
            <div className="m-auto text-center">checking avatar</div>
          </div>
        </div>
      </div>
    )
    // } else if (props.avatar.startsWith('https')) {
    //   return <img src={props.avatar} width={100} height={100} style={{ background: 'grey' }} />
  } else if (props.avatar === '') {
    return (
      <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full bg-black/20">
            <div className="m-auto text-center">no avatar</div>
          </div>
        </div>
      </div>
    )
  } else {
    console.log(props.ens)
    return (
      <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden">
        {ImgLoader(props.ens)}
      </div>
    )
  }
}
