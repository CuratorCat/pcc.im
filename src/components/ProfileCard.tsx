import { useState } from 'react'
import { provider } from 'provider'
import { Avatar } from './Avatar'

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

  return (
    <div className="mt-5">
      <div>
        <Avatar avatar={avatar} />
      </div>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">address</span>
        {props.address}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">ens</span>
        {props.ens}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">primary Ens</span>
        {props.primaryEns === null ? looking : props.primaryEns == '' ? '-' : props.primaryEns}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">description</span>
        {description === null ? looking : description == '' ? '-' : description}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">url</span>
        {url === null ? looking : url == '' ? '-' : url}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">content Hash</span>
        {contentHash === null ? looking : contentHash == '' ? '-' : contentHash}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">email</span>
        {email === null ? looking : email == '' ? '-' : email}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">twitter</span>
        {twitter === null ? looking : twitter == '' ? '-' : twitter}
      </p>
      <p>
        <span className="block mt-2 uppercase text-white/50 text-md">github</span>
        {github === null ? looking : github == '' ? '-' : github}
      </p>
    </div>
  )
}

const looking = <span className="inline-block animate-bounce">👀</span>
