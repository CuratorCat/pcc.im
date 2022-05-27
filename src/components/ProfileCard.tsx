import { useState } from 'react'
import { provider } from 'provider'
import Link from 'next/link'
import { Avatar } from 'components/Avatar'
import { Disclosure, Transition } from '@headlessui/react'
import { useEffect } from 'react'
import { DuplicateIcon, LinkIcon, MailIcon, HashtagIcon, ExternalLinkIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { formatUrl } from 'functions/SocialHelpers'
import { SocialTwitter, SocialInstagram, SocialTiktok, SocialGithub } from 'components/Socials/SocialLinks'

import { EthereumLogo, BitcoinLogo } from './icons'

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

  function primaryEnsBadge(ens, primaryEns) {
    if (!primaryEns) {
      return (
        <span className="px-2 py-0.5 rounded-full break-all line-clamp-1 text-xs font-bold bg-black/20 text-violet-400/25 uppercase">
          No Primary ENS
        </span>
      )
    }
    if (ens.toLowerCase() === primaryEns.toLowerCase()) {
      return (
        <span className="px-2 py-0.5 rounded-full break-all line-clamp-1 text-xs font-bold bg-violet-400 text-black/50 uppercase">
          Primary ENS
        </span>
      )
    }
    return (
      <span className="px-2 py-0.5 rounded-full break-all line-clamp-1 text-xs font-bold bg-violet-400 text-black/50">
        <Link href={'/' + props.primaryEns}>{props.primaryEns}</Link>
      </span>
    )
  }

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
    <div className="profile-view">
      <H3> {props.ens.endsWith('.pcc.eth') ? 'purrfile' : 'profile'}</H3>

      {/* card head */}
      <div className="flex items-start space-x-3">
        {/* avatar */}
        <div className="flex shrink-0 relative">
          <Avatar avatar={avatar} ens={props.ens} />
        </div>

        {/* account */}
        <div className="flex flex-col space-y-1.5 sm:space-y-2">
          {/* ens */}
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight break-all ">{props.ens}</h2>

          {/* ens badge */}
          <div className="flex space-x-1">{primaryEnsBadge(props.ens, props.primaryEns)}</div>

          {/* address */}
          {shortenAddress(props.address)}
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 leading-snug">
        <Bio />
      </div>

      <Socials twitter={twitter} github={github} instagram={instagram} tiktok={tiktok} />

      <Addresses ethAddress={props.address} btcAddress={btcAddress} />
    </div>
  )
}

const looking = <span className="inline-block animate-bounce">👀</span>

function H3({ children }) {
  return (
    <>
      <h3 className="text-4xl mb-3 font-light text-violet-400">{children}</h3>
    </>
  )
}

function shortenAddress(address) {
  if (!address || address === '') return null
  return (
    <div className="text-sm text-violet-400 font-semibold tracking-wider">
      <span>{address.substring(0, 6) + '···' + address.substring(address.length - 4)}</span>
      <span className="hidden">
        <DuplicateIcon className="-mt-1 ml-1 w-4 h-4 inline-block opacity-75" />
      </span>
    </div>
  )
}

function Socials(props) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative w-full mx-0 cursor-pointer group">
            <div
              className={`${
                open ? 'hidden' : 'bg-black/20 '
              } absolute inset-0 z-20 rounded-2xl -mx-3 text-4xl text-violet-400 font-light py-3 text-left px-3 transition-all duration-500`}
            >
              socials
            </div>
            <div className="flex justify-between items-center">
              <h3 className={`${open ? '' : 'opacity-0'} text-4xl text-violet-400 font-light py-3`}>socials</h3>
              <ChevronDownIcon
                className={`${
                  open ? '-scale-100' : ''
                } h-8 w-8 text-violet-400/25 group-hover:text-violet-400 transition-all duration-300`}
              />
            </div>
          </Disclosure.Button>

          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static as="div" className="leading-none">
              {props.twitter == null || props.github == null || props.instagram == null || props.tiktok == null ? (
                <div className="pb-3 animate-pulse">looking for social accounts</div>
              ) : props.twitter == '' && props.github == '' && props.instagram == '' && props.tiktok == '' ? (
                <div className="opacity-50 pb-3">no supported social accounts found</div>
              ) : (
                <div className="social-links">
                  <SocialTwitter social={props.twitter} />
                  <SocialInstagram social={props.instagram} />
                  <SocialTiktok social={props.tiktok} />
                  <SocialGithub social={props.github} />
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

function Addresses(props) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative w-full mx-0 cursor-pointer group">
            <div
              className={`${
                open ? 'hidden' : 'bg-black/20 '
              } absolute inset-0 z-20 rounded-2xl -mx-3 text-4xl text-violet-400 font-light py-3 text-left px-3 transition-all duration-500`}
            >
              addresses
            </div>
            <div className="flex justify-between items-center">
              <h3 className={`${open ? '' : 'opacity-0'} text-4xl text-violet-400 font-light py-3`}>addresses</h3>
              <ChevronDownIcon
                className={`${
                  open ? '-scale-100' : ''
                } h-8 w-8 text-violet-400/25 group-hover:text-violet-400 transition-all duration-300`}
              />
            </div>
          </Disclosure.Button>

          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static as="div" className="leading-none">
              <ul className="addresses-list">
                {props.ethAddress == '' && props.btcAddress == '' ? (
                  <div className="opacity-50">no supported blockchain addresses found</div>
                ) : null}

                {props.ethAddress != null && props.ethAddress != '' ? (
                  <li>
                    <EthereumLogo className="logo" />
                    <div className="asset">
                      <h4>ethereum</h4>
                      <div className="address">{props.ethAddress}</div>
                    </div>
                  </li>
                ) : null}

                {props.btcAddress != null && props.btcAddress != '' ? (
                  <li>
                    <BitcoinLogo className="logo" />
                    <div className="asset">
                      <h4>bitcoin</h4>
                      <div className="address">{props.btcAddress}</div>
                    </div>
                  </li>
                ) : null}

                {props.btcAddress == null ? <div>looking for blockchain addresses</div> : null}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
