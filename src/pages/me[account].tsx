import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { useRouter } from "next/router";
import Head from "next/head";
import { Network } from "@web3-react/network";
import Web3 from "web3";
import { hooks as networkHooks, network } from "../connectors/network";
import { QueryAccountView } from "components/QueryAccount";

const connectors: [Network, Web3ReactHooks][] = [
  [network, networkHooks],
  // [metaMask, metaMaskHooks],
  // [walletConnect, walletConnectHooks],
]

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
  const QueryAccount = router.query.account

  const Addr0 = isValidAddress(QueryAccount) ? router.query.account : ""
  const Ens0 = maybeEns(QueryAccount) ? QueryAccount : ""

  if (Addr0 == "" && Ens0 == "") {
    return (
      <h1>
        Account <em>{QueryAccount}</em> is invalid
      </h1>
    );
  }

  return (
    <Web3ReactProvider connectors={connectors}>
      <Head>
        <title>{QueryAccount}</title>
      </Head>
      <QueryAccountView address={Addr0} ens={Ens0} />
    </Web3ReactProvider>
  );
}
