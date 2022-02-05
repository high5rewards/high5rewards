const hre = require("hardhat");
const fs = require('fs');

/*

-Go to Moralis Dashboard/ Speedy Nodes and copy RPC for Mumbai testnet from the Polygon nodes
-Setup Mumbai Testnet in Metamask but use Moralis RPC (one copied in step above)
-Add RPC to dotenv. Refer hardhatconfig for naming
-npm install moralis
*/

//import moralis
const Moralis = require("moralis/node");
require('dotenv').config();

//init moralis
const serverUrl = process.env.MORALIS_SERVER_URL;
const appId = process.env.MORALIS_APP_ID;
Moralis.start({ serverUrl, appId });

async function main() {    //get contracts associated with NFTMarket.sol
    const RewardsMarket = await ethers.getContractFactory("RewardsMarket")
    //deploy the contract factory
    const market = await RewardsMarket.deploy()
    //deploy contract and wait to fulfil
    await market.deployed()

    console.log("RewardsMarket deployed to:", market.address);

    //get contracts for NFT.sol
    const Reward = await ethers.getContractFactory("Reward")
    //pass market contract address to nft contract constructor
    const reward = await Reward.deploy(market.address)
    await reward.deployed()

    console.log("Reward deployed to:", reward.address);

    let config = `
    export const marketaddress = "${market.address}"
    export const rewardcontractaddress = "${reward.address}"
    `
  
    let data = JSON.stringify(config)
    fs.writeFileSync('config.js', JSON.parse(data))
  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
