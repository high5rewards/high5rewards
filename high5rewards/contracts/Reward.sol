// SPDX-License-Identifier: UNLICENSED

//Defining Solidity version
pragma solidity ^ 0.8.4;

//ERC721 token standard
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//URI generating util
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
//Utility to increment numbers
import "@openzeppelin/contracts/utils/Counters.sol";

//init NFT Contract of type ERC1155
contract Reward is ERC721URIStorage {
    //init counters util
    using Counters for Counters.Counter;
    //let us track unique Id for each token
    Counters.Counter private _tokenIds;

    //address of marketplace we want NFT to interact with
    //we give ability for transfer of Ownership from diff contract
    address contractAddress;

    //constructor passes contract address
    //we need to figure how to pass ERC params via user input
    constructor(address marketplaceAddress) ERC721("High 5 Rewards", "HIGH5") {

        //address that calls constructor is marketplace address
        contractAddress = marketplaceAddress;

    }

    //function to create token
    //returns uint tokenId
    function createToken(string memory tokenURI) public returns (uint) {
        
        //to make first toke ID 1
        _tokenIds.increment();
        //assigns new item id
        uint256  newItemId = _tokenIds.current();

        //mints token
        _mint(msg.sender, newItemId);

        //set tokenURI
        _setTokenURI(newItemId, tokenURI);
        
        //enable other contracts to transact the tokens
        setApprovalForAll(contractAddress, true);

        return newItemId;
    }

}