
import { useEffect, useState } from 'react'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
// import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask'
import { hooks as networkHooks, network } from '../connectors/network'
// import { hooks as walletConnectHooks, walletConnect } from '../connectors/walletConnect'
import { Status } from '../components/Status'

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = networkHooks

function getName(connector: Connector) {
  // if (connector instanceof MetaMask) return 'MetaMask'
  // if (connector instanceof WalletConnect) return 'WalletConnect'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

const connectors: [MetaMask | WalletConnect | Network, Web3ReactHooks][] = [
  [network, networkHooks],
  // [metaMask, metaMaskHooks],
  // [walletConnect, walletConnectHooks],
]

function Child() {
  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate()
  }, [])

  const [address, setAddress] = useState("")


  const { connector } = useWeb3React()
  const description = `Priority Connector is: ${getName(connector)}`
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)
  const ActiveStatus = isActive ? 'Connected' : isActivating ? 'Activating' : 'Not Connected'

  return (
    <div>
      {description}
      <p>{chainId}</p>
      <Status isActivating={isActivating} error={error} isActive={isActive} />
      {address}
    </div>
  )
}

export default function ProviderExample() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <h1>Debug Page</h1>
      <Child />
    </Web3ReactProvider>
  )
}
