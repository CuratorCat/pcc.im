import { ethers } from "ethers";
import { useState } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";


const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/84842078b09946638c03157f83405213");

// const getName = (addr) => {
//   console.log("fetching address.. ");
//   provider.lookupAddress(addr).then((resolvedName) => {
//     return resolvedName ?? addr;
//   });
// };

export default function App() {
  // const addrRef = useRef();

  const [address, setAddress] = useState("")
  const [ensName, setEnsName] = useState("alice.eth")
  const [resolvedAddress, setResolvedAddress] = useState("")
  const [resolvedEnsName, setResolvedEnsName] = useState("")

  if (address === "" && ensName != "") {
    provider.resolveName('alice.eth').then((resolvedName) => {
      console.log("fetching addr.. ");
      setResolvedAddress(resolvedName)
      setAddress(resolvedName)
    });
  }

  if (address != "" && ensName === "") {
    provider.lookupAddress("0x9759226B2F8ddEFF81583e244Ef3bd13AAA7e4A1").then((resolvedName) => {
      console.log("fetching name.. ");
      setResolvedEnsName(resolvedName)
      setResolvedAddress(address)
    });
  }

  if (resolvedAddress != "" && resolvedEnsName === "") {
    provider.lookupAddress("0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343eeE").then((resolvedName) => {
      console.log("fetching name 2.. ");
      setResolvedEnsName(resolvedName)
      setResolvedAddress(address)
    });
  }
  
  return (
    <div className="mt-5">
    <p>address: {address}</p>
    <p>resolvedAddress: {resolvedAddress}</p>
    <p>ensName: {ensName}</p>
    <p>resolvedEnsName: {resolvedEnsName}</p>
  </div>
  );
}
