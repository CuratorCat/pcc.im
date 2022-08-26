import { useState } from 'react'
import { provider } from 'provider'
import { Avatar } from 'components/Avatar'
import { useEffect } from 'react'
import { DuplicateIcon } from '@heroicons/react/outline'
import { EnsTextType } from 'types'
import { socialTextsQuery, Socials } from 'components/Socials'
import { bioTextsQuery, Bio } from 'components/Bio'
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
  // bio data
  const [bioData, setBioData] = useState<EnsTextType[]>([])
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

      // get contentHash
      resolver
        .getContentHash()
        .then(result => {
          setBioData(data => [...data, { key: 'contentHash', value: result ? result : '' }])
          console.log('contentHash', result)
        })
        .catch(e => {
          setBioData(data => [...data, { key: 'contentHash', value: '' }])
          console.log(e)
        })

      // get bio data
      bioTextsQuery.map(async text => {
        resolver.getText(text).then(result => {
          setBioData(data => [...data, { key: text, value: result ? result : '' }])
          console.log(text, result)
        })
      })

      // get social data
      socialTextsQuery.map(async text => {
        resolver.getText(text).then(result => {
          setSocialData(data => [...data, { key: text, value: result ? result : '' }])
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
        <Bio data={bioData} ens={props.ens} />
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
