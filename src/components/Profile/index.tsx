import { useState } from 'react'
import { provider } from 'provider'
import Link from 'next/link'
import { Avatar } from 'components/Avatar'
import { useEffect } from 'react'
import { DuplicateIcon, GlobeAltIcon, MailIcon, HashtagIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { formatUrl } from 'functions/SocialHelpers'
import { EnsTextType } from 'types'
import { socialTextsQuery, Socials } from 'components/Socials'
import Addresses from 'components/Addresses'
import { EnsBadge } from 'components/Profile/EnsBadge'
import { shortenAddress } from 'functions/AddressHelpers'
import { copyTextWithToast } from 'functions/CopyHelpers'
import Head from 'next/head'
import { ethers, BigNumber } from 'ethers'

const pccEnsMapper = {
  contract: '0x9B6d20F524367D7E98ED849d37Fc662402DCa7FB',
  abi: [
    'function domainMap(string label) view returns (bytes32)',
    'function hashToIdMap(bytes32) view returns (uint256)',
  ],
}

export function Profile(props) {
  const [avatar, setAvatar] = useState(null)
  const [catId, setCatId] = useState(null)
  // profile
  const [description, setDescription] = useState(null)
  const [url, setUrl] = useState(null)
  const [email, setEmail] = useState(null)
  const [contentHash, setContentHash] = useState(null)
  // social data
  const [socialData, setSocialData] = useState<EnsTextType[]>([])
  // addresses
  const [btcAddress, setBtcAddress] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const resolver = await provider.getResolver(props.ens)
      const pccEns = new ethers.Contract(pccEnsMapper.contract, pccEnsMapper.abi, provider)

      console.log('namehash', props.ens, ethers.utils.namehash(props.ens))

      // get catId for .pcc.eth
      if (props.ens.endsWith('.pcc.eth') && props.resolver === pccEnsMapper.contract) {
        pccEns.domainMap(props.ens.toLowerCase().substring(0, props.ens.length - 8)).then(result => {
          pccEns.hashToIdMap(result).then(result => {
            setCatId(BigNumber.from(result).toString())
          })
        })
      }

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
      resolver
        .getContentHash()
        .then(result => {
          result ? setContentHash(result) : setContentHash('')
        })
        .catch(e => {
          setContentHash('')
          console.log(e)
        })

      // get social data
      socialTextsQuery.map(async text => {
        resolver.getText(text).then(result => {
          result
            ? setSocialData(data => [...data, { key: text, value: result }])
            : setSocialData(data => [...data, { key: text, value: '' }])
          console.log(text, result)
        })
      })

      // get addresses
      resolver
        .getAddress(0)
        .then(result => {
          result ? setBtcAddress(result) : setBtcAddress('')
        })
        .catch(e => {
          setBtcAddress('')
          console.log(e)
        })
    }

    fetchData().catch(console.error)
  }, [props.ens])

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
                <GlobeAltIcon className="icon" aria-hidden="true" />
                <Link href={formatUrl(url)}>
                  <a target="_blank" className="group">
                    <span>{url}</span>
                    <ExternalLinkIcon className="inline-block -mt-0.5 w-3 h-3 text-violet-400 opacity-0 group-hover:opacity-100" />
                  </a>
                </Link>
              </li>
            )}

            {/* email */}
            {email == '' ? null : (
              <li>
                <MailIcon className="icon" aria-hidden="true" />
                <a href={'mailto:' + email}>
                  <span>{email}</span>
                </a>
              </li>
            )}

            {/* contentHash */}
            {contentHash == '' ? null : (
              <li>
                <HashtagIcon className="icon" aria-hidden="true" />
                <div>
                  <span className="mr-2">{contentHash}</span>
                  <span className="text-violet-400/25 group">
                    <button
                      className="hover:cursor-pointer text-sm group font-semibold tracking-wider hover:text-violet-400"
                      onClick={() => copyTextWithToast(contentHash)}
                    >
                      <DuplicateIcon className="-mt-0.5 w-4 h-4 inline-block" />
                    </button>
                    {props.ens.endsWith('.eth') ? (
                      <span className="pl-3">
                        <Link href={'https://' + props.ens + '.limo'}>
                          <a target="_blank" className=" hover:text-violet-400">
                            <span>{props.ens + '.limo'}</span>
                            <ExternalLinkIcon className="w-3 h-3 inline-block ml-0.5 -mt-0.5" />
                          </a>
                        </Link>
                      </span>
                    ) : null}
                  </span>
                </div>
              </li>
            )}
          </ul>
        )}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{props.ens}'s' ens profile - pcc.im</title>
      </Head>
      <H3>
        ens {props.ens.endsWith('.pcc.eth') ? 'purrfile' : 'profile'}
        {catId ? <span className="inline-block rounded-md ml-2 font-semibold text-sm">Cat#{catId}</span> : ''}
      </H3>
      {/* card head */}
      <div className="flex items-start space-x-3">
        {/* avatar */}
        <div className="flex shrink-0 relative">
          <Avatar avatar={avatar} ens={props.ens} catId={catId} />
        </div>

        {/* account */}
        <div className="flex flex-1 flex-col space-y-1.5 sm:space-y-2">
          {/* ens */}
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight break-all">
            <span className="cursor-pointer" onClick={() => copyTextWithToast(props.ens)}>
              {props.ens}
            </span>
          </h2>

          {/* ens badge */}
          <div className="flex space-x-1">
            <EnsBadge ens={props.ens} primaryEns={props.primaryEns} />
          </div>

          {/* address */}
          {ProfileAddress(props.address)}
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 leading-snug">
        <Bio />
      </div>

      <Socials data={socialData} />

      <Addresses ethAddress={props.address} btcAddress={btcAddress} />
    </>
  )
}

function H3({ children }) {
  return <h3 className="text-4xl mb-3 font-light text-violet-400">{children}</h3>
}

function ProfileAddress(address) {
  if (!address || address === '') return null
  return (
    <div className="text-sm">
      <button
        className="hover:cursor-pointer text-sm group font-semibold tracking-wider text-violet-400"
        onClick={() => copyTextWithToast(address)}
      >
        {shortenAddress(address)}
        <DuplicateIcon className="-mt-1 ml-1 w-4 h-4 inline-block opacity-25 hover:opacity-100 group-hover:opacity-100 transition-all duration-150" />
      </button>
    </div>
  )
}
