## Intro

The value of Web 3 can be hard to explain due to its obscure terminology: sidechains, DeFi, NFTs, staking, shards, etc. The mainstream perspective of NFTs (non-fungible tokens, unique units of data stored on a digital ledger known as a blockchain) is limited to JPEG gorillas which appear to be speculative assets without much utility and that cost tens of thousands of dollars. This is in addition to the already high gas fees on Ethereum, which are cost-prohibitive for most of the world. 

Marginalized and unbanked communities are those that would benefit most from this financial revolution, and they need a platform that is accessible for them. We all face intense competition as individuals and as social groups, and this can lead to atomization and disenchantment with the rhythms of life. Take subscriptions, for instance. The typical consumer has fun when they're watching movies through a streaming platform they subscribed to, but they do not have fun when they open their email and see a plain text message stating the bill is due.

High 5 Rewards offers a new approach to NFTs. We built a subscription and reward NFT marketplace where approved vendors can sell NFTs containing both digital art and an ongoing subscription to a service, and when users finish paying off that subscription they will receive a reward NFT for a future product or service. Digital property rights and physical property rights come together. 

Deploying our dApp (decentralized app) to the Polygon L2 sidechain instead of Ethereum mainnet keeps our marketplace accessible to the world. Gas fees are very minimal, so this is a solution to both Ethereum's high gas fees and to pain points in legacy financial systems such as wire transfers and credit card fees for small purchases. This will enable mass adoption and the ability for people to buy something tangible without converting their crypto to fiat.

High 5 Rewards is built for everyone, and we intend to keep it accessible and fun for all humans regardless of where they are in the world. For users in places with intermittent WiFi, upcoming solutions that bring together mesh networks and offline transactions will be useful. For users feeling disconnected, our platform aligns incentives and promotes cooperation and connection between users, vendors, and their cities. Vendors may choose to share subscriptions with each other, or to offer reward NFTs, discounts, and promotions that can be used at each others businesses. Web 3 is all about community, and this is a chance for a small business to bring all the crypto enthusiasts in their city to a single place. People can exchange ideas, support local businesses, and most importantly, have fun. Charming NFTs such as the Loyal Beans coffee subscription offer art value and a gamified customer experience as opposed to just another subscription email and form.



## Walkthrough

![landing](https://github.com/high5rewards/high5rewards/client/src/screenshots/0landing.png?raw=true)

Sam wants to both sell subscription NFTs and buy his own subscription NFTs. To enter the app, he clicks "connect wallet" to open a dialog box in his Metamask browser wallet. After approving the transaction, he is logged in through his wallet and redirected to the app.

![marketplace](https://github.com/high5rewards/high5rewards/client/src/screenshots/1market.png?raw=true)

In the marketplace, Sam can see all the approved vendors who list subscription NFTs. He's interested in Mocha Madness because he buys a coffee from them daily, trades crypto on decentralized finance platforms, and would like a way to bridge those two worlds.

![subscriptions](https://github.com/high5rewards/high5rewards/client/src/screenshots/2subscriptions.png?raw=true)

Sam purchased a 6 month Loyal Bean from the Mocha Madness coffee shop. This allows him to walk to Mocha Madness, show the barista his NFT, and co-sign a smart contract which toggles a boolean value in his NFT's JSON metadata, "usedToday." This value prevents customers, through dishonesty or forgetfulness, from receiving more items than they paid for. It will be set to "false" again in 24 hours. 

While enjoying his hot cup of coffee, Sam reads about his new reward NFT. He previously purchased another 6 month subscription to Mocha Madness. When the 6 month period was up and his subscription was paid in full, that subscription NFT was burned and a new rewards NFT was minted and sent to his wallet. This rewards NFT, a JPEG coffee cup on a saucer, allows the owner to receive one month of free coffee upon executing a smart contract on High 5 Rewards. Sam's friend, Jacob, is also into DeFi and NFTs but doesn't use High 5 Rewards. Sam sends his reward NFT to Jacob to introduce him to the platform. 

![vendor](https://github.com/high5rewards/high5rewards/client/src/screenshots/3vendor.png?raw=true)

Sam is starting up his own coffee shop. He is friends with the owner of Mocha Madness, and they agree to deploy rewards NFTs which can be used at either of their stores. On the Vendor Dashboard tab, he can view all the subscription NFTs he has set up to deploy to his vendor page on the Marketplace tab. He may also mint a new NFT by uploading art and key properties.  


## Upcoming features

- Sia Skynet Homescreen decentralized frontend compatability 
- Superfluid streaming payments
- Middleware tying smart contract with React UI
- Mesh networks and offline transactions

## Technologies

- Solidity smart contracts
- Moralis Speedy Nodes
- Polygon L2 sidechain (Mumbai Testnet) 
- HTML5
- CSS3
- JavaScript
- React
- Node
