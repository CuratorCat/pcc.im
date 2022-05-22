import { useRouter } from 'next/router'
import Head from 'next/head'
import { QueryAccountView } from 'components/QueryAccount'
import { isAddress, getAddress } from 'ethers/lib/utils'

function maybeEns(str) {
  const dot = /[.]/
  const invalidChars = /[`~!@#$%^&()\-+[\]_'",;{}<> ]/
  return dot.test(str) && !invalidChars.test(str) && str.charAt(0) != '.' && str.substr(str.length - 1) != '.'
    ? true
    : false
}

export default function Account() {
  const router = useRouter()

  const { account } = router.query

  // @ts-ignore
  const address = isAddress(account) ? account : ''
  const ens = maybeEns(account) ? account : ''

  if (address == '' && ens == '') {
    return (
      <h1>
        Account <em>{account}</em> is invalid
      </h1>
    )
  } else {
    return (
      <>
        <Head>
          <title>{account}</title>
        </Head>
        <QueryAccountView address={address} ens={ens} />
      </>
    )
  }
}
