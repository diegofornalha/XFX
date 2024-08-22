// thirdwebConfig.js

import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Crie o cliente com seu clientId
const client = createThirdwebClient({ 
  clientId: "dc1eef1ab045a4dda1831f98739d3f6d" // Seu clientId
});

// Conecte-se ao contrato
const contract = getContract({ 
  client, 
  chain: defineChain(545), // Chain ID para Flow Testnet
  address: "0x89A017a71A78442E90f0cb06662475bb659BFbAa" // Endereço do seu contrato
});

export { client, contract };
