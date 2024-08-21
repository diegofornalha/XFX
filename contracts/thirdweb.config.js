module.exports = {
    networks: {
      // Configuração para a rede Testnet da Flow
      testnet: {
        chainId: 545,
        url: 'https://access-testnet.onflow.org', // URL do endpoint da Testnet da Flow
        currency: 'FLOW' // Moeda usada na rede
      }
    },
    contracts: {
      Greeter: './path/to/Greeter.sol'
    }
  };
  