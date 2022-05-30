import { useRouter } from 'next/router'
import { QueryAccountView } from 'components/QueryAccount'
import { isAddress } from 'ethers/lib/utils'
import { Layout } from 'layouts'
import { maybeEns } from 'functions/EnsHelpers'

export default function Account() {
  const router = useRouter()
  const { account } = router.query

  // prevent null
  if (account == null) return null

  // @ts-ignore
  const address = isAddress(account) ? account : ''
  const ens = maybeEns(account) ? account : ''

  // pass address or ens to Query
  // use .pcc.eth for invalid address or !maybeEns
  return (
    <Layout>
      <QueryAccountView address={address} ens={address == '' && ens == '' ? account + '.pcc.eth' : ens} />
    </Layout>
  )
}