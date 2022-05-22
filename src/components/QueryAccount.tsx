import { useState } from 'react'
import { isAddress, getAddress } from 'ethers/lib/utils'
import { ProfileCard } from './ProfileCard'
import { provider } from 'provider'
import { Layout } from 'layouts/Layout'
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
        <Layout>
          <main>
            <p>not valid address 1</p>
          </main>
          <Footer />
        </Layout>
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
      <Layout>
        <main>
          <p>not valid address 2</p>
        </main>
        <Footer />
      </Layout>
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
        <Layout>
          <main>
            <p>not valid address</p>
          </main>
          <Footer />
        </Layout>
      )
    }
  }

  if (address != '' && address != null && daq) {
    if (ens === null) {
      return (
        <Layout>
          <main>
            <p>address: {address}</p>
            <p>has no primary ens record</p>
          </main>
          <Footer />
        </Layout>
      )
    } else {
      return (
        <Layout>
          <main>
            <ProfileCard address={address} ens={ens} primaryEns={primaryEns} />
          </main>
          <Footer />
        </Layout>
      )
    }
  }

  return (
    <Layout>
      <main>
        <h3>looking up</h3>
        <h4>{props.address + props.ens}</h4>
      </main>
      <Footer />
    </Layout>
  )
}
