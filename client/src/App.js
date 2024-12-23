import React, { useState, useEffect } from "react";
import Web3 from "web3";
import RealEstateNFT from "./abi/RealEstateNFT.json";

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [tokenURI, setTokenURI] = useState("");
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RealEstateNFT.networks[networkId];
      const instance = new web3.eth.Contract(
        RealEstateNFT.abi,
        deployedNetwork && deployedNetwork.address
      );

      setContract(instance);
    };

    init();
  }, []);

  const mintToken = async () => {
    if (!contract) return;
    const result = await contract.methods.mint(tokenURI).send({ from: account });
    alert(`Token minted! ID: ${result.events.Transfer.returnValues.tokenId}`);
  };

  const loadTokens = async () => {
    const totalSupply = await contract.methods.tokenCount().call();
    const tokenList = [];
    for (let i = 1; i <= totalSupply; i++) {
      const uri = await contract.methods.tokenURI(i).call();
      tokenList.push({ id: i, uri });
    }
    setTokens(tokenList);
  };

  return (
    <div>
      <h1>Real Estate NFT Marketplace</h1>
      <div>
        <input
          type="text"
          placeholder="Token URI"
          value={tokenURI}
          onChange={(e) => setTokenURI(e.target.value)}
        />
        <button onClick={mintToken}>Mint Token</button>
      </div>
      <div>
        <button onClick={loadTokens}>Load Tokens</button>
        <ul>
          {tokens.map((token) => (
            <li key={token.id}>
              Token ID: {token.id} | URI: <a href={token.uri}>{token.uri}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
