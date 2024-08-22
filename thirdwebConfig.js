// thirdwebConfig.js

const { createThirdwebClient, getContract } = require("thirdweb");
const { defineChain } = require("thirdweb/chains");

const clientId = "dc1eef1ab045a4dda1831f98739d3f6d";
const client = createThirdwebClient({ clientId });

const contractAddress = "0x89A017a71A78442E90f0cb06662475bb659BFbAa";
const chain = defineChain(545); // Use Chain ID 545 for Flow Testnet

const contract = getContract({ client, chain, address: contractAddress });

module.exports = { contract };
