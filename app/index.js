// Import ethers.js
const { ethers } = require("ethers")
const config = require("./config.json")
const url = "https://rinkeby.infura.io/v3/06ad6936699f4bd2887f8d4db7e2b613"
const PK = config.privateKey

// connect to RPC -- We can connect to a Ethereum provider just to read from blockchain using Provider 
// and if we want to write we need to connect as a signer
// By default it connects to localhost:8545 if we are running a node locally. Otherwise we need to provide rpc url 
const provider = new ethers.providers.JsonRpcProvider(url)
const eth = new ethers.Wallet(PK,provider)

