

import { useEffect, useState } from 'react'
import React from 'react'
import type { Connector } from '@web3-react/types'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { hooks as networkHooks, network } from '../connectors/network'
import { Status } from 'components/Status'
import { Accounts } from 'components/Accounts'

import { ethers } from "ethers";
const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames, useAccount } = networkHooks


function getName(connector: Connector) {
  // if (connector instanceof MetaMask) return 'MetaMask'
  // if (connector instanceof WalletConnect) return 'WalletConnect'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

export function QueryView(props) {
  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate()
  }, [])

  useAccounts()

  const { connector } = useWeb3React()
  const description = `Priority Connector is: ${getName(connector)}`
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  
  const ActiveStatus = isActive ? 'Connected' : isActivating ? 'Activating' : 'Not Connected'
  const ENSNames = useENSNames(provider)

  var address = '0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343eeE';

  
  // async function getEnsName() {
  //   var name = await provider.lookupAddress(address)
  //   setEnsName(name)
  // }

  // getEnsName()

  
  

  if (isActivating || !isActive) {
    return (
      <div>
        <p>{ActiveStatus}</p>
      </div>
    )
  }

  if (isActive) {
    return (
      <div>
      {description}
      <p>{chainId}</p>
      <Status isActivating={isActivating} error={error} isActive={isActive} />
      <p>addr: {props.address}</p>
        <p>ens: {props.ens}</p>
        <p>ens2: </p>
        <Accounts accounts={[props.address]} provider={provider} ENSNames={["0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343eeE"]} />
    </div>
    )
  }

  return (
    <div>
      {description}
      <p>{chainId}</p>
      <Status isActivating={isActivating} error={error} isActive={isActive} />
      {/* <p>addr: {address}</p> */}
      {/* <p>ens: {ensName}</p> */}
    </div>
  )
}