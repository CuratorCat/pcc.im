import { useRouter } from "next/router";
import Head from "next/head";
import Web3 from "web3";
import { QueryAccountView } from "components/QueryAccount";

function maybeEns(str) {
  const dot = /[.]/;
  const invalidChars = /[`~!@#$%^&()\-+[\]_'",;{}<> ]/;
  return dot.test(str) &&
    !invalidChars.test(str) &&
    str.charAt(0) != "." &&
    str.substr(str.length - 1) != "."
    ? true
    : false
}

const isValidAddress = (str) => {
  try {
    const web3 = new Web3()
    web3.utils.toChecksumAddress(str)
    return true
  } catch (e) {
    return false
  }
}

export default function Account() {
  const router = useRouter()

  const { account } = router.query

  const address = isValidAddress(account) ? router.query.account : ""
  const ens = maybeEns(account) ? account : ""

  if (address == "" && ens == "") {
    return (
      <h1>
        Account <em>{account}</em> is invalid
      </h1>
    );
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
