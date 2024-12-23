// truffle-config.js
module.exports = {
    networks: {
      development: {
        host: "127.0.0.1", // Localhost (default: 127.0.0.1)
        port: 7545,        // Standard Ganache port (default: 7545)
        network_id: "*"    // Any network (default: none)
      },
      rinkeby: {
        provider: () => new HDWalletProvider(
          "YOUR_MNEMONIC", 
          `https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID`
        ),
        network_id: 4,       // Rinkeby's network id
        gas: 4500000,        // Gas limit
        gasPrice: 10000000000 // 10 gwei
      }
    },
  
    // Set default Mocha options here
    mocha: {
      timeout: 100000
    },
  
    // Configure Solidity compiler
    compilers: {
      solc: {
        version: "0.8.0",  // Fetch exact version from solc-bin
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    }
  };
  