import { useState } from 'react'
import { provider } from 'provider'
import { Avatar } from './Avatar'
import Link from 'next/link'

export function ProfileCard(props) {
  if (!props.ens) {
    return <></>
  }

  const [avatar, setAvatar] = useState(null)
  const [description, setDescription] = useState(null)
  const [url, setUrl] = useState(null)
  const [contentHash, setContentHash] = useState(null)
  const [email, setEmail] = useState(null)
  const [twitter, setTwitter] = useState(null)
  const [github, setGithub] = useState(null)
  const [instagram, setInstagram] = useState(null)
  const [facebook, setFacebook] = useState(null)
  const [tiktok, setTiktok] = useState(null)
  const [telegram, setTelegram] = useState(null)

  ;(async () => {
    const resolver = await provider.getResolver(props.ens)

    if (avatar == null) {
      resolver.getText('avatar').then(result => {
        if (result) {
          setAvatar(result)
        } else {
          setAvatar('')
        }
      })
    }

    if (description == null) {
      resolver.getText('description').then(result => {
        if (result) {
          setDescription(result)
        } else {
          setDescription('')
        }
      })
    }

    // get contentHash
    if (contentHash == null) {
      resolver.getContentHash().then(result => {
        if (result) {
          setContentHash(result)
        } else {
          setContentHash('')
        }
        // console.log(result)
      })
    }

    if (email === null) {
      resolver.getText('email').then(result => {
        if (result) {
          setEmail(result)
        } else {
          setEmail('')
        }
      })
    }
    if (url === null) {
      resolver.getText('url').then(result => {
        if (result) {
          setUrl(result)
        } else {
          setUrl('')
        }
      })
    }
    if (github === null) {
      resolver.getText('com.github').then(result => {
        if (result) {
          setGithub(result)
        } else {
          setGithub('')
        }
      })
    }
    if (instagram === null) {
      resolver.getText('com.instagram').then(result => {
        if (result) {
          setInstagram(result)
        } else {
          setInstagram('')
        }
      })
    }
    if (facebook === null) {
      resolver.getText('com.facebook').then(result => {
        if (result) {
          setFacebook(result)
        } else {
          setFacebook('')
        }
      })
    }
    if (tiktok === null) {
      resolver.getText('com.tiktok').then(result => {
        if (result) {
          setTiktok(result)
        } else {
          setTiktok('')
        }
      })
    }

    if (telegram === null) {
      resolver.getText('com.telegram').then(result => {
        if (result) {
          setTelegram(result)
        } else {
          setTelegram('')
        }
      })
    }
    if (twitter === null) {
      resolver.getText('com.twitter').then(result => {
        if (result) {
          setTwitter(result)
        } else {
          setTwitter('')
        }
      })
    }
  })()

  function matchBadge(ens, primaryEns) {
    if (ens == null || primaryEns == null) {
      return (
        <div className="w-fit px-2 py-0.5 rounded-full bg-black/20 text-xs uppercase text-white animate-pulse">
          🧐 validating
        </div>
      )
    } else if (primaryEns == '') {
      return <div className="w-fit px-2 py-0.5 rounded-full bg-black/10  text-xs uppercase">no primary ens</div>
    } else if (ens.toLowerCase() === primaryEns.toLowerCase()) {
      return (
        <div className="w-fit px-2 py-0.5 rounded-full bg-[#866EC9] text-[#473A74] text-xs font-semibold uppercase">
          primary ens
        </div>
      )
    } else {
      return (
        <div className="w-fit px-2 py-0.5 rounded-full bg-[#866EC9] text-[#473A74] text-xs font-semibold">
          <a href={'/' + primaryEns}>{primaryEns}</a>
        </div>
      )
    }
  }

  const Bio = () => {
    if (description == null && url == null && email == null && contentHash == null) {
      return <div className="w-full h-30">looking up socials</div>
    }
    if (description == '' && url == '' && email == '' && contentHash == '') {
      return <div className="w-full h-30">no bio</div>
    }
    return (
      <>
        <p>
          {description === null ? looking : description == '' ? '' : description}
        </p>
        <p>
          {url === null ? looking : url == '' ? '' : url}
        </p>
        <p>
          {contentHash === null ? looking : contentHash == '' ? '' : contentHash}
        </p>
        <p>
          {email === null ? looking : email == '' ? '' : email}
        </p>
      </>
    )
  }

  const Socials = () => {
    if (twitter == null && github == null) {
      return <div className="w-full h-30">looking up socials</div>
    }
    if (twitter == '' && github == '') {
      return <>no social</>
    }
    return (
      <>
        <p>
          <span className="block mt-2 uppercase text-white/50 text-md">twitter</span>
          {twitter === null ? looking : twitter == '' ? '-' : twitter}
        </p>
        <p>
          <span className="block mt-2 uppercase text-white/50 text-md">github</span>
          {github === null ? looking : github == '' ? '-' : github}
        </p>
      </>
    )
  }

  return (
    <div>
      <H3>{props.ens.endsWith('.pcc.eth') ? 'purrfile' : 'profile'}</H3>
      <Avatar avatar={avatar} ens={props.ens} />
      <div>
        <p className="text-2xl">{props.ens}</p>
        {matchBadge(props.ens, props.primaryEns)}
      </div>
      <Bio />
      <H3>socials</H3>
      <Socials />

      <H3>addresses</H3>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">ethereum</span>
        {props.address}
      </p>
    </div>
  )
}

const looking = <span className="inline-block animate-bounce">👀</span>

function H3({ children }) {
  return (
    <>
      <h3 className="text-4xl mt-3 mb-3 font-light text-black/30">{children}</h3>
    </>
  )
}
