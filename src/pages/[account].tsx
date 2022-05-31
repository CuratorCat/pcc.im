import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react'
import { Layout } from 'layouts'
import { isAddress } from 'ethers/lib/utils'
import { maybeEns } from 'functions/EnsHelpers'
import { lookUpAccount } from 'functions/LookupAccount'
import { Profile } from 'components/Profile'
import EnsBadge from 'components/Profile/EnsBadge'
import { Avatar } from 'components/Avatar'
import { Search } from 'components/Search'
import { ExpoloreEns } from 'components/ExploreEns'

export default function Account() {
  const router = useRouter()
  const { account } = router.query

  // account
  const [ethAddress, setEthAddress] = useState(null)
  const [ens, setEns] = useState(null)
  const [primaryEns, setPrimaryEns] = useState(null)
  const [resolver, setResolver] = useState(null)
  const [proceed, setProceed] = useState(false)
  const [error, setError] = useState(null)

  if (!account) return null

  // @ts-ignore
  const tryAddress = isAddress(account) ? account : ''
  const tryEns = maybeEns(account) ? account : ''

  // fetch account info
  lookUpAccount(
    tryAddress,
    tryAddress == '' && tryEns == '' ? account + '.pcc.eth' : tryEns,
    setEthAddress,
    setEns,
    setPrimaryEns,
    setResolver,
    setProceed
  )

  // pass address or ens to Query
  // use .pcc.eth for invalid address or !maybeEns
  return (
    <Layout>
      {/* Errors */}
      {error && <div>Error: {error}</div>}

      {/* 404 */}
      {proceed && ens === '' && (
        <>
          <Head>
            <title>404: {account} - pcc.im</title>
          </Head>
          <h3 className="text-3xl break-all">
            can not found ens profile for
            <p className="text-2xl font-semibold ">{account}</p>
          </h3>
          <Search />
          <ExpoloreEns />
        </>
      )}

      {/* Loader & Profile */}
      {!proceed && (
        <div className="profile-view">
          <Head>
            <title>looking up {account} - pcc.im</title>
          </Head>
          <h3 className="text-4xl mb-3 font-light text-violet-400">profile</h3>
          {/* card head */}
          <div className="flex items-start space-x-3">
            {/* avatar */}
            <div className="flex shrink-0 relative">
              <Avatar />
            </div>

            {/* account */}
            <div className="flex flex-1 flex-col space-y-1.5 sm:space-y-2">
              {/* ens */}
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight break-all ">{account}</h2>

              {/* ens badge */}
              <div className="flex space-x-1">{EnsBadge(null, null)}</div>
            </div>
          </div>
        </div>
      )}
      {proceed && ens !== '' && (
        <div className="profile-view">
          <Profile ens={ens} primaryEns={primaryEns} address={ethAddress} resolver={resolver} />
        </div>
      )}
    </Layout>
  )
}
