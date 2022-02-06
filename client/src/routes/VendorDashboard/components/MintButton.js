// import { useState } from "react"
// import { ethers } from 'ethers'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
// import Web3Modal from 'web3modal'
// import web3 from 'web3'

// import { rewardcontractaddress, marketaddress } from '../../../Hardhat/config'
// import Reward from '../../../Hardhat/contracts/Reward.sol'
// import RewardsMarket from '../../../Hardhat/contracts/RewardsMarket.sol'


// import { Button } from '@mui/material';









const MintButton = () => {


    // Create Sale
    let createSale = async(url) => {
        console.log(0)
        // const web3Modal = new Web3Modal({
        //     cacheProvider: true
        // })
    
        // const connection = await web3Modal.connect() 
        // const provider = new ethers.providers.Web3Provider(connection)
        // const signer = provider.getSigner() 
        
        // let contract = new ethers.Contract(rewardcontractaddress, Reward.abi, signer) 
        // let transaction = await contract.createToken(url)
        // let tx = await transaction.wait()
        // let value = event.args[2]
        // let tokenId = value.toNumber()
        // const price = web3.utils.toWei(formInput.price, 'ether')

        // const listingPrice = web3.utils.toWei('0.1', 'ether')

        // contract = new ethers.Contract(marketaddress, RewardsMarket.abi, signer)
        // transaction = await contract.createMarketItem(rewardcontractaddress, tokenId, price, { value: listingPrice })
        
        // await transaction.wait()
    }

    // On Change
    async function onChange(e) {
        console.log(0)

        // const file = e.target.files[0];
        // try {
        //   const added = await client.add(
        //     file,
        //     {
        //       progress: (prog) => console.log(`received: ${prog}`)
        //     }
        //   )
        //   const url = `https://ipfs.infura.io/ipfs/${added.path}`
        //   setFileUrl(url)
        // } catch (error) {
        //   console.log('Error uploading file: ', error);
        // }  
      }

      // Create Market
      async function createMarket() {
        console.log(0)

        // const { name, description, price } = formInput
        // if (!name || !description || !price || !fileUrl) return
        // // first, upload to IPFS
        // const data = JSON.stringify({
        //   name, description, image: fileUrl
        // })
        // try {
        //   const added = await client.add(data)
        //   const url = `https://ipfs.infura.io/ipfs/${added.path}`
        //   createSale(url)
        // } catch (error) {
        //   console.log('Error uploading file: ', error);
        // }  
      }



    return (
        <div>
            <div>
                <input 
                placeholder="NFT Name"
                onChange={e => console.log(e.target.value) }
                />
                <input
                placeholder="NFT Description"
                onChange={e => console.log(e.target.value) }
                />
                <input
                placeholder="NFT Price in Eth"
                onChange={e => console.log(e.target.value) }
                />
                <input
                type="file"
                name="NFT"
                onChange={onChange}
                />
                <div>File URL and display image</div>
                <button onClick={createMarket} >
                Mint NFT
                </button>
            </div>
        </div>

    );
}

export default MintButton;


// const MintButton = () => {
//     return (
//         <div>

//             <Button onClick={()=>alert('mint')} variant='contained' size="small" color="success">
//                 Mint an NFT
//             </Button>
//         </div>

//     );
// }

// export default MintButton;