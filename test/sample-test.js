const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RewardsMarket", function () {
  it("Should create and execute sales", async function () {
    
    //get contracts associated with NFTMarket.sol
    const RewardsMarket = await ethers.getContractFactory("RewardsMarket")
    //deploy the contract factory
    const market = await RewardsMarket.deploy()
    //deploy contract and wait to fulfil
    await market.deployed()
    //fetch market contract address
    const marketAddress = market.address

    //get contracts for NFT.sol
    const Reward = await ethers.getContractFactory("Reward")
    //pass market contract address to nft contract constructor
    const reward = await Reward.deploy(marketAddress)
    await reward.deployed()
    const rewardContractAddress = reward.address

    console.log(typeof reward)
    console.log(typeof market)

    let listingPrice = await market.getListingPrice()
    
    listingPrice = listingPrice.toString()

    //assign selling price
    //parseUnits let us use whole units instead of wei and decimals
    //ether is placeholder, we are using MATIC
    const auctionPrice = ethers.utils.parseUnits('5', 'ether')

    await reward.createToken("./LOYALBEANS5.png")
    await reward.createToken("./LOYALBEANS10.png")
  
    await market.createMarketItem(rewardContractAddress, 1, auctionPrice, { value: listingPrice })
    await market.createMarketItem(rewardContractAddress, 2, auctionPrice, { value: listingPrice })

    //get test addresses
    //the "_" skips first address because first address deploys the contracts
    //we dont buyer and seller to be same
    const[_, buyerAddress] = await ethers.getSigners()

    await market.connect(buyerAddress).createMarketSale(rewardContractAddress, 1, {value: auctionPrice})
    
    items = await market.fetchMarketItems()

    //fetch items asynchronously
    items = await Promise.all(items.map(async i => {
      //fetching token URI
      const tokenUri = await reward.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  
  });
});
