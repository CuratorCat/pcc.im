import { useState } from 'react'
import { isAddress, getAddress } from 'ethers/lib/utils'
import { ProfileCard } from './ProfileCard'
import { provider } from 'provider'
import { Footer } from './Footer'

export function QueryAccountView(props) {
  const [address, setAddress] = useState(null)
  const [ens, setEns] = useState(null)
  const [primaryEns, setPrimaryEns] = useState(null)
  const [hasAddress, setHasAddress] = useState(true)
  const [hasPrimaryEns, setHasPrimaryEns] = useState(true)
  const [daq, setDaq] = useState(false)

  if (!props.address && !props.ens) {
    return <></>
  }

  if (props.address != '' && address === null && props.ens === '' && ens === null && primaryEns === null) {
    if (isAddress(props.address)) {
      // console.log("fetching ens... ")
      provider.lookupAddress(props.address).then(resolvedName => {
        if (resolvedName === null) {
          setHasPrimaryEns(false)
        } else {
          setEns(resolvedName)
          setPrimaryEns(resolvedName)
        }
        setAddress(getAddress(props.address))
        setDaq(true)
      })
    } else {
      return (
        <>
          <main>
            <p>not valid address 1</p>
          </main>
          <Footer />
        </>
      )
    }
  }

  if (address === null && props.address === '' && props.ens != '' && address === null && hasPrimaryEns) {
    // console.log("fetching addr... ")
    provider.resolveName(props.ens).then(resolvedAddress => {
      if (resolvedAddress === null) {
        setHasAddress(false)
      } else {
        setAddress(resolvedAddress)
        setEns(props.ens)
      }
      setDaq(true)
    })
  }

  if (!hasAddress) {
    return (
      <>
        <main>
          <p>not valid address 2</p>
        </main>
        <Footer />
      </>
    )
  }

  if (props.ens != '' && primaryEns === null && address != null && hasAddress && hasPrimaryEns) {
    if (isAddress(address)) {
      // console.log("fetching primaryEns... ")
      provider.lookupAddress(address).then(resolvedName => {
        if (resolvedName === null) {
          setHasPrimaryEns(false)
          setPrimaryEns('')
        } else {
          setPrimaryEns(resolvedName)
        }
      })
    } else {
      return (
        <>
          <main>
            <p>not valid address</p>
          </main>
          <Footer />
        </>
      )
    }
  }

  if (address != '' && address != null && daq) {
    if (ens === null) {
      return (
        <>
          <main>
            <p>address: {address}</p>
            <p>has no primary ens record</p>
          </main>
          <Footer />
        </>
      )
    } else {
      return (
        <>
          <main>
            <div className="profile-view">
              <ProfileCard address={address} ens={ens} primaryEns={primaryEns} />
            </div>
          </main>
          <Footer />
        </>
      )
    }
  }

  return (
    <>
      <main>
        <div className="profile-view">
          <div className="text-xl">
            <h3 className="text-3xl">looking up</h3>
            <p className="font-light">{props.address + props.ens}</p>
            <p>on blockchain</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
