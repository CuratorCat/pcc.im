import { useEffect } from 'react'
import { provider } from 'provider'
import { useRouter } from 'next/router'
import { getAddress } from 'ethers/lib/utils'

export function lookUpAccount(tryAddress, tryEns, setEthAddress, setEns, setPrimaryEns, setResolver, setProceed) {
  if (!tryAddress && !tryEns) {
    return null
  }

  const router = useRouter()

  useEffect(() => {
    
    setTimeout(() => {
      if (provider.websocket.readyState != 1) {
        console.log('ws', provider.websocket.readyState)
        router.reload()
      }
    }, 5000)

    console.log('🛠😺')

    // address
    if (tryAddress) {
      // check ens
      console.log('looking ens for', tryAddress)
      provider.lookupAddress(tryAddress).then(resolvedName => {
        if (resolvedName) {
          // has ens, set addr, ens, primaryEns
          console.log('found ens', resolvedName)
          setEthAddress(getAddress(tryAddress))
          setEns(resolvedName)
          setPrimaryEns(resolvedName)
          setProceed(true)

          console.log('looking up resolver for', resolvedName)
          provider.getResolver(resolvedName).then(resolver => {
            if (resolver) {
              // has resovler, set resolver
              console.log('resolver found', resolver.address)
              setResolver(resolver.address)
            } else {
              console.log('no resolver found')
              setResolver('')
            }
          })
        } else {
          console.log('no ens found')
          setEns('')
          setProceed(true)
        }
      })
    }

    // maybe ens
    if (tryEns) {
      // check ens for resolver
      console.log('looking up resolver for', tryEns)
      provider.getResolver(tryEns).then(resolver => {
        if (resolver) {
          // has resovler, set ens
          console.log('resolver found', resolver.address)
          setResolver(resolver.address)
          setEns(tryEns)
          setProceed(true)

          console.log('resolving addr for', tryEns)
          // check address
          provider.resolveName(tryEns).then(resolvedAddress => {
            // has address, set address
            if (resolvedAddress) {
              console.log('resolvedAddress', resolvedAddress)
              setEthAddress(resolvedAddress)

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
                  setPrimaryEns('')
                }
              })
            }

            // no eth address
            else {
              console.log(tryEns, 'has no ETH addr')
              setEthAddress('')
              setPrimaryEns('')
              setProceed(true)
            }
          })
        } else {
          console.log('no resolver found')
          setEns('')
          setProceed(true)
        }
      })
    }
  }, [])
}
