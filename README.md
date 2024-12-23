# Real Estate NFT Marketplace on OpenSea

This project enables users to mint and list real estate NFTs on OpenSea.

## Features
- Mint NFTs representing real estate properties.
- Integrate with OpenSea for marketplace functionality.

## Usage
1. Install dependencies: `npm install`
2. Deploy the contract: `truffle migrate`
3. Start the app: `cd client && npm start`

## OpenSea Integration
Use the script in `listToken.js` to list NFTs on OpenSea.

OpenSea Integration
To integrate with OpenSea, you can use the OpenSea SDK to list tokens for sale.

Example Script for Listing a Token:
Install the OpenSea SDK:

bash
Copy code
npm install @opensea/seaport-js ethers
Add a script for listing tokens:

javascript
Copy code
const { ethers } = require("ethers");
const { Seaport } = require("@opensea/seaport-js");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
const signer = provider.getSigner("YOUR_WALLET_ADDRESS");

const seaport = new Seaport(signer);

async function listToken(contractAddress, tokenId, price) {
  const offer = {
    asset: {
      token: contractAddress,
      tokenId,
    },
    price,
  };

  const order = await seaport.createSellOrder(offer);
  console.log("Order created:", order);
}
