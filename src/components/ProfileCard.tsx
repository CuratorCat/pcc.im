import { useState } from 'react'
import { provider } from 'provider'
import Link from 'next/link'
import { Avatar } from 'components/Avatar'
import { useEffect } from 'react'
import { DuplicateIcon, LinkIcon, MailIcon, HashtagIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { formatUrl } from 'functions/SocialHelpers'
import Socials from 'components/Socials'
import Addresses from 'components/Addresses'
import EnsBadge from './Profile/EnsBadge'
import { shortenAddress } from 'functions/AddressHelpers'

export function ProfileCard(props) {
  if (!props.ens || props.address == null) return null

  const [avatar, setAvatar] = useState(null)
  // profile
  const [description, setDescription] = useState(null)
  const [url, setUrl] = useState(null)
  const [email, setEmail] = useState(null)
  const [contentHash, setContentHash] = useState(null)
  // social links
  const [twitter, setTwitter] = useState(null)
  const [instagram, setInstagram] = useState(null)
  const [tiktok, setTiktok] = useState(null)
  const [discord, setDiscord] = useState(null)
  const [telegram, setTelegram] = useState(null)
  const [github, setGithub] = useState(null)
  // addresses
  const [btcAddress, setBtcAddress] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const resolver = await provider.getResolver(props.ens)

      resolver.getText('avatar').then(result => {
        result ? setAvatar(result) : setAvatar('')
      })

      resolver.getText('description').then(result => {
        result ? setDescription(result) : setDescription('')
      })

      resolver.getText('url').then(result => {
        result ? setUrl(result) : setUrl('')
      })

      resolver.getText('email').then(result => {
        result ? setEmail(result) : setEmail('')
      })

      // get contentHash
      if (!props.ens.endsWith('.pcc.eth')) {
        resolver.getContentHash().then(result => {
          result ? setContentHash(result) : setContentHash('')
        })
      } else {
        setContentHash('')
      }

      // get social links
      resolver.getText('com.twitter').then(result => {
        result ? setTwitter(result) : setTwitter('')
      })

      resolver.getText('com.instagram').then(result => {
        result ? setInstagram(result) : setInstagram('')
      })

      resolver.getText('com.tiktok').then(result => {
        result ? setTiktok(result) : setTiktok('')
      })

      resolver.getText('com.discord').then(result => {
        result ? setDiscord(result) : setDiscord('')
      })

      resolver.getText('org.telegram').then(result => {
        result ? setTelegram(result) : setTelegram('')
      })

      resolver.getText('com.github').then(result => {
        result ? setGithub(result) : setGithub('')
      })

      // get addresses
      // resolver.getAddress(0).then(result => {
      //   result ? setBtcAddress(result) : setBtcAddress('')
      // })
      setBtcAddress('')
    }

    fetchData().catch(console.error)
  }, [])

  

  const Bio = () => {
    if (description == null || url == null || email == null || contentHash == null) {
      return <div className="w-full py-3 animate-pulse">looking up ens profile</div>
    }
    if (description == '' && url == '' && email == '' && contentHash == '') {
      return null
    }
    return (
      <>
        {/* description */}
        {description == '' ? null : <p className="font-medium">{description}</p>}

        {/* url, email, contentHash */}
        {url == '' && email == '' && contentHash == '' ? null : (
          <ul role="list" className="profile-links">
            {/* url */}
            {url == '' ? null : (
              <li>
                <LinkIcon className="icon" aria-hidden="true" />

                <Link href={formatUrl(url)}>
                  <a target="_blank">
                    <span>{url}</span>
                    <ExternalLinkIcon className="indicator" />
                  </a>
                </Link>
              </li>
            )}

            {/* email */}
            {email == '' ? null : (
              <li>
                <MailIcon className="icon" aria-hidden="true" />

                <Link href={'mailto:' + email}>
                  <a>
                    <span>{email}</span>
                  </a>
                </Link>
              </li>
            )}

            {/* contentHash */}
            {contentHash == '' ? null : (
              <li>
                <HashtagIcon className="icon" aria-hidden="true" />
                <div>{contentHash}</div>
              </li>
            )}
          </ul>
        )}
      </>
    )
  }

  return (
    <>
      <H3> {props.ens.endsWith('.pcc.eth') ? 'purrfile' : 'profile'}</H3>

      {/* card head */}
      <div className="flex items-start space-x-3">
        {/* avatar */}
        <div className="flex shrink-0 relative">
          <Avatar avatar={avatar} ens={props.ens} />
        </div>

        {/* account */}
        <div className="flex flex-1 flex-col space-y-1.5 sm:space-y-2">
          {/* ens */}
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight break-all ">{props.ens}</h2>

          {/* ens badge */}
          <div className="flex space-x-1">{EnsBadge(props.ens, props.primaryEns)}</div>

          {/* address */}
          {ProfileAddress(props.address)}
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 leading-snug">
        <Bio />
      </div>

      <Socials
        twitter={twitter}
        github={github}
        instagram={instagram}
        tiktok={tiktok}
        telegram={telegram}
        discord={discord}
      />

      <Addresses ethAddress={props.address} btcAddress={btcAddress} />
    </>
  )
}

function H3({ children }) {
  return (
    <>
      <h3 className="text-4xl mb-3 font-light text-violet-400">{children}</h3>
    </>
  )
}

function ProfileAddress(address) {
  if (!address || address === '') return null
  return (
    <div className="text-sm text-violet-400 font-semibold tracking-wider">
      <span>{shortenAddress(address)}</span>
      <span className="hidden">
        <DuplicateIcon className="-mt-1 ml-1 w-4 h-4 inline-block opacity-75" />
      </span>
    </div>
  )
}
