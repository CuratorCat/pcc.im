import { useRouter } from 'next/router'
import { QueryAccountView } from 'components/QueryAccount'
import { isAddress } from 'ethers/lib/utils'
import { Layout } from 'layouts'

export default function Account() {
  const router = useRouter()
  const { account } = router.query

  // @ts-ignore
  const address = isAddress(account) ? account : ''
  const ens = maybeEns(account) ? account : ''

  // prevent null
  if (account == null) {
    return ''
  }

  // pass address or ens to Query
  // use .pcc.eth for invalid address or !maybeEns
  return (
    <Layout>
      <QueryAccountView address={address} ens={address == '' && ens == '' ? account + '.pcc.eth' : ens} />
    </Layout>
  )
}

function maybeEns(str) {
  const dot = /[.]/
  const invalidChars = /[`~!@#$%^&()+[\]_'",;{}<> ]/
  return dot.test(str) && !invalidChars.test(str) && str.charAt(0) != '.' && str.substr(str.length - 1) != '.'
    ? true
    : false
}
