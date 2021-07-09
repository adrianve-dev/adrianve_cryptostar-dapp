# CryptoStar Token (CST)

Ethereum application that lets astronomers mint **ERC721 tokens** that represent stars they've discovered and allows users to trade them. A token includes the star's name, coordinates, and owner of the star.

## Installation
- Download and unzip contents or fork
- cd to the top-level directoy and run `npm install`
- cd to the app directory and run `npm install`

## Deploy
- fill the `infuraKey` and `mnemonic` variables with your infura key and your mnemonic
- run `truffle migrate --reset --network ropsten` (if you want to deploy to Rinkeby, update truffle-config's `ropsten` with `rinkeby` and change to network id to 4. Then replace `ropsten` with `rinkeby` in the migrate command)


## Running the application
- cd to app and run `npm run dev`
- open a new window and navigate to http://localhost:8080/
- connect your wallet and refresh the page

## Package versions

- Truffle v5.2.5 (core: 5.2.5)
- Solidity v0.5.16 (solc-js)
- Node v14.16.0
- Web3.js v1.2.9
- OpenZeppelin: ^2.5.1
- truffle-hdwallet-provider: ^1.0.17
- solc compiler version: "0.5.5" (truffle-config.js)