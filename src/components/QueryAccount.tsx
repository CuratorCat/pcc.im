import { useState } from 'react'
import { isAddress, getAddress } from 'ethers/lib/utils'
import { ProfileCard } from './ProfileCard'
import { provider } from 'provider'

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
      return <>invalid 1</>
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
    return <>invalid 2</>
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
      return <>invalid</>
    }
  }

  if (address != '' && address != null && daq) {
    if (ens === null) {
      return (
        <div className="mt-5">
          <p>address: {address}</p>
          <p>has no primary ens record</p>
        </div>
      )
    } else {
      return <ProfileCard address={address} ens={ens} primaryEns={primaryEns} />
    }
  }

  return (
    <>
      <h3>looking up</h3>
      <h4>{props.address + props.ens}</h4>
    </>
  )
}
