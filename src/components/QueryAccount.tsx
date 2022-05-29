import { useEffect, useState } from 'react'
import { getAddress } from 'ethers/lib/utils'
import { ProfileCard } from './ProfileCard'
import { provider } from 'provider'
import { Search } from './Search'
import { ExpoloreEns } from './ExploreEns'
import Head from 'next/head'

export function QueryAccountView(props) {
  const [address, setAddress] = useState(null)
  const [ens, setEns] = useState(null)
  const [primaryEns, setPrimaryEns] = useState(null)
  const [proceed, setProceed] = useState(false)

  if (!props.address && !props.ens) {
    return null
  }

  useEffect(() => {
    console.log('🛠😺')
    // address
    if (props.address) {
      // check ens
      console.log('looking ens for', props.address)
      provider.lookupAddress(props.address).then(resolvedName => {
        // has resolver, replace url
        if (resolvedName) {
          console.log('found ens', resolvedName)
          setEns(resolvedName)
          setPrimaryEns(resolvedName)
          // router.replace('/' + resolvedName)
        }
        // no resolver
        else {
          console.log('no ens found')
        }
        // set checksum address and proceed
        setAddress(getAddress(props.address))
        setProceed(true)
      })
    }

    // maybe ens
    if (props.ens) {
      // check ens for resolver
      console.log('looking up resolver for', props.ens)
      provider.getResolver(props.ens).then(resolver => {
        if (resolver) {
          // has resovler, set ens
          console.log('resolver found', resolver.address)
          console.log('resolving addr for', props.ens)
          setEns(props.ens)

          // check address
          provider.resolveName(props.ens).then(resolvedAddress => {
            // has address, set address
            if (resolvedAddress) {
              console.log('resolvedAddress', resolvedAddress)
              setAddress(resolvedAddress)

              // check primaryEns
              console.log('looking up primaryEns for', resolvedAddress)
              provider.lookupAddress(resolvedAddress).then(resolvedName => {
                // has primaryEns, set primaryEns
                if (resolvedName) {
                  console.log('primaryEns', resolvedName)
                  setPrimaryEns(resolvedName)
                }

                // no primaryEns, set ens
                else {
                  console.log('no primaryEns for', resolvedAddress)
                }
                setProceed(true)
              })
            }

            // no eth address
            else {
              console.log(props.ens, 'has no ETH addr')
              setAddress('')
              setProceed(true)
            }
          })
        } else {
          console.log('no resolver found')
          setProceed(true)
        }
      })
    }
  }, [props.address, props.ens])

  if (!proceed) {
    return (
      <>
        <Head>
          <title>looking up {props.address + props.ens} - pcc.im</title>
        </Head>
        <div className="profile-view">
          <div className="text-xl">
            <h3 className="text-3xl animate-bounce">looking up</h3>
            <p className="font-light break-all text-4xl">{props.address + props.ens}</p>
            <p>on blockchain</p>
          </div>
        </div>
      </>
    )
  }

  if (ens === null) {
    return (
      <>
        <Head>
          <title>404: {props.address + props.ens} - pcc.im</title>
        </Head>
        <h3 className="text-3xl break-all">
          can not found ens profile for
          <p className="text-2xl font-semibold ">
            {props.address} {props.ens}
          </p>
        </h3>
        <Search />
        <ExpoloreEns />
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>{ens} ens profile - pcc.im</title>
        </Head>
        <div className="profile-view">
          <ProfileCard address={address} ens={ens} primaryEns={primaryEns} />
        </div>
      </>
    )
  }
}
