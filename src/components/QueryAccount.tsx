import { ethers } from "ethers";
import { useState } from "react";
import { isAddress } from "ethers/lib/utils";

const provider = new ethers.providers.InfuraProvider(
  1,
  "84842078b09946638c03157f83405213"
);

(async () => {
  const provider = new ethers.providers.InfuraProvider(
    1,
    "84842078b09946638c03157f83405213"
  );

  const address = await provider.resolveName("arisac.eth");

  const balance = await provider.getBalance("arisac.eth");

  console.log(`Balance of ${address} is:`, ethers.utils.formatEther(balance));
})();

export function QueryAccountView(props) {
  const [address, setAddress] = useState("");
  const [ens, setEns] = useState("");
  const [primaryEns, setPrimaryEns] = useState("");
  const [hasAddress, setHasAddress] = useState(true);
  const [hasPrimaryEns, setHasPrimaryEns] = useState(true);
  const [daq, setDaq] = useState(false);
  const [url, setUrl] = useState("");

  if (!props.address && !props.ens) {
    return <></>;
  }

  if (
    props.address != "" &&
    address == "" &&
    props.ens === "" &&
    ens == "" &&
    primaryEns === ""
  ) {
    if (isAddress(props.address)) {
      setAddress(props.address);
      // console.log("fetching ens 1.. ")
      provider.lookupAddress(props.address).then((resolvedName) => {
        if (resolvedName == null) {
          setHasPrimaryEns(false);
        } else {
          setEns(resolvedName);
          setPrimaryEns(resolvedName);
        }
        setAddress(props.address);
        setDaq(true);
      });
    } else {
      return <>invalid</>;
    }
  }

  if (
    address === "" &&
    props.address === "" &&
    props.ens != "" &&
    address === "" &&
    hasPrimaryEns
  ) {
    // console.log("fetching addr.. ")
    provider.resolveName(props.ens).then((resolvedAddress) => {
      if (resolvedAddress === null) {
        setHasAddress(false);
      } else {
        setAddress(resolvedAddress);
        setEns(props.ens);
      }
      setDaq(true);
    });
  }

  if (!hasAddress) {
    return <>invalid</>;
  }

  if (
    props.ens != "" &&
    primaryEns == "" &&
    address != "" &&
    hasAddress &&
    hasPrimaryEns
  ) {
    if (isAddress(address)) {
      // console.log("fetching ens 2.. ")
      provider.lookupAddress(address).then((resolvedName) => {
        if (resolvedName == null) {
          setHasPrimaryEns(false);
        } else {
          setPrimaryEns(resolvedName);
        }
      });
    } else {
      return <>invalid</>;
    }
  }

  if (address != "" && daq) {
    if (ens === "") {
      return (
        <div className="mt-5">
          <p>address: {address}</p>
          <p>has no primary ens record</p>
        </div>
      );
    } else {
      return (
        <div className="mt-5">
          <p>address: {address}</p>
          <p>ens: {ens}</p>
          <p>primaryEns: {primaryEns}</p>
        </div>
      );
    }
  }

  return (
    <>
      <h3>looking up</h3>
      <h4>{props.address + props.ens}</h4>
    </>
  );
}
