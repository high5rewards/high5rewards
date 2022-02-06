require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  //config different networks
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      //url: "ADD_RPC_URL",
      url: process.env.MORALIS_RPC,
      //accounts: "ADD_ACCOUNT_PRIVATE_KEY",
      accounts: [process.env.YOUR_PRIVATE_ACCOUNT_KEY],
    },
  },
  solidity: "0.8.4",
};
