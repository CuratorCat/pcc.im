// import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import MetaMaskCard from "../components/connectorCards/MetaMaskCard";
import NetworkCard from "../components/connectorCards/NetworkCard";
import WalletConnectCard from "../components/connectorCards/WalletConnectCard";
import ProviderExample from "../components/ProviderExample";

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div
        style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
      >
        test
        <MetaMaskCard />
        <WalletConnectCard />
        <NetworkCard />
      </div>
    </>
  );
}
