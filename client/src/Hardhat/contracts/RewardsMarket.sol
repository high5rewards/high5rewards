// SPDX-License-Identifier: UNLICENSED

pragma solidity ^ 0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//Utility to increment numbers
import "@openzeppelin/contracts/utils/Counters.sol";
//security control for re-entry attacks
//use this on any function that talks to different contract
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "hardhat/console.sol";

contract RewardsMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
   
    //each item created on market
    Counters.Counter private _itemIds;
    
    //no of items sold
    Counters.Counter private _itemsSold;

    //no of vendors
    Counters.Counter private _vendorIds;

    //var for owner of contract
    address payable owner;

    //list price in any local currency
    //ether keyword is placeholder for any currency
    uint256 listingPrice = 0.025 ether ;

    constructor() {
        //owner is person who calls contract
        owner = payable(msg.sender);
    }

    //struct for each item on market
    struct MarketItem {
        uint itemId;                    //itemnumber on market
        address nftContract;            //address of nftcontract
        uint256 tokenId;                
        address payable seller;         //seller address
        address payable owner;          //owner address
        uint256 price;                  //selling price
        bool sold;                      //is it sold
    }

    //struct for each vender
    struct Vendor {
        uint vendorId;
        address vendorAddress;
        string vendorName;
        string vendorBio;
        string vendorCity;
    }

    //track all items created
    //item Id to Market Item
    mapping(uint256 => MarketItem) private idToMarketItem;

    //track all vendors
    mapping(uint256 => Vendor) private idToVendor;

    //event to tell item is created
    event MarketItemCreated (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    //event to tell vendor is created
    event VendorCreated (
        uint indexed vendorId,
        address indexed vendorAddress,
        string vendorName,
        string vendorBio,
        string vendorCity
    );

    //function to view listingPrice
    function getListingPrice () public view returns (uint256) {
        return listingPrice;
    }

    //function to create new item
    //nonReentrant modifier to prevent reentrancy attacks
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");
        //check if minter is sending listing price
        require(msg.value == listingPrice, "Price must be equal to listing price"); 

        _itemIds.increment();
        //id for market item going on sale
        uint256 itemId  = _itemIds.current();

        //push new item to mapping
        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            //seller address
            payable(msg.sender),
            //owner set to null address
            payable(address(0)),
            price,
            false
        );

        //transfer ownership from seller to marketplace for trading
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        //emit event item created
        emit MarketItemCreated(
            itemId, 
            nftContract, 
            tokenId, 
            msg.sender, 
            address(0), 
            price, 
            false);
    }

    //function to create Vendor
    function createVendor(
        string memory _vendorName,
        string memory _vendorBio,
        string memory _vendorCity
    ) public payable nonReentrant {

        _vendorIds.increment();

        uint256 vendorId = _vendorIds.current();

        idToVendor[vendorId] = Vendor(
            vendorId,
            msg.sender,
            _vendorName,
            _vendorBio,
            _vendorCity
        );

        //announce vendor created
        emit VendorCreated (
            vendorId,
            msg.sender,
            _vendorName,
            _vendorBio,
            _vendorCity
        );

    }


    //init sale
    function createMarketSale(
        address nftContract,
        uint256 itemId
    ) public payable nonReentrant {

        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;

        //check if amount sent by buyer is equal to asking price
        require(msg.value == price, "Please submit the asking price!");
        
        //transfer amount to owner (seller)
        idToMarketItem[itemId].seller.transfer(msg.value);

        //transfer NFT to buyer from contract address
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        //set new owner of NFT
        idToMarketItem[itemId].owner = payable(msg.sender);

        //keep track of items sold
        idToMarketItem[itemId].sold = true;
        _itemsSold.increment();
        
    }

    function fetchVendor() public view returns (Vendor memory) {
        uint vendorCount = _vendorIds.current();

        for (uint i = 0; i < vendorCount; i++) {
            if (idToVendor[i + 1].vendorAddress == msg.sender) {
                return idToVendor[i + 1];
            }
        }

    }

    //fetch all items on the market
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint i = 0; i < itemCount; i++) {
        if (idToMarketItem[i + 1].owner == address(0)) {
            uint currentId = i + 1;
            MarketItem storage currentItem = idToMarketItem[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
            }
        }
        return items;
    }

    //function to get owned NFTs (buyer side)
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        //gets total items on market
        uint totalItemCount = _itemIds.current();
        //counter for nfts owned by me
        uint itemCount = 0;
        //counter for looping and indexing        
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                //if true item count is uncremented
                itemCount += 1;
            }
        }
        
        //array named items
        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < itemCount ; i++) {
            //checks if owner of NFTs is fetching
            if (idToMarketItem[i + 1].owner == msg.sender) {
                //item id is fetched from mapping
                uint currentId = i + 1;
                //item is pulled from mapping
                MarketItem storage currentItem = idToMarketItem[currentId];
                //item is stored to array
                items[currentIndex] = currentItem;
                //counter increment
                currentIndex += 1;
            }

        }
        
        //array of myNFTs returned
        return items;
    }

    //fetch nfts created by seller
    function fetchCreatedNFTs() public view returns (MarketItem[] memory) {
        //total NFTs on market
        uint totalItemCount = _itemIds.current();
    
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                //if true item count is uncremented
                itemCount += 1;
            }
        }
        
        //array named items
        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < itemCount ; i++) {
            //check if seller(creator of NFT) is calling function
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }

        }

        //return array of items created
        return items;
    }

}