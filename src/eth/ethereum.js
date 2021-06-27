import { ethers } from 'ethers';
import config from '@/config';

import canvasAuctionAbi from '@/eth/abi/CanvasAuction.json';
import coinBidAbi from '@/eth/abi/CoinBid.json';
import coinBidCreationAbi from '@/eth/abi/CoinBidCreation.json';
import miningAbi from '@/eth/abi/Mining.json';
import NFTAuctionAbi from '@/eth/abi/NFTAuction.json';
import NFTFactoryAbi from '@/eth/abi/NFTFactory.json';

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
// const signer = provider.getSigner();

// const canvasAuctionContract = new ethers.Contract(config.canvasAuction, canvasAuctionAbi.abi, provider);
// const coinbidContract = new ethers.Contract(config.coinbid, coinBidAbi.abi, provider);
// const coinbidCreationContract = new ethers.Contract(config.coinbidCreation, coinBidCreationAbi.abi, provider);
const miningContract = new ethers.Contract(config.mining, miningAbi.abi, provider);
const NFTAuctionContract = new ethers.Contract(config.NFTAuction, NFTAuctionAbi.abi, provider);
const NFTFactoryContract = new ethers.Contract(config.NFTFactory, NFTFactoryAbi.abi, provider);


export {
  // canvasAuctionContract,
  // coinbidContract,
  // coinbidCreationContract,
  miningContract,
  NFTAuctionContract,
  NFTFactoryContract,
}
(async () => {
  // // Look up the current block number
  // const blockNumber = await provider.getBlockNumber();
  // // 12660428
  // // Get the balance of an account (by address or ENS name, if supported by network)
  // const balance = await provider.getBalance('0x7F4024e254ECA707C080041157c70D88D5E4B99C');
  // // { BigNumber: "2337132817842795605" }

  // // Often you need to format the output to something more user-friendly,
  // // such as in ether (instead of wei)
  // const formatBalance = ethers.utils.formatEther(balance);
  // // '2.337132817842795605'
  // console.log(formatBalance);

  // // If a user enters a string in an input field, you may need
  // // to convert it from ether (as a string) to wei (as a BigNumber)
  // const parsedEth = ethers.utils.parseEther('1.0');
  // console.log(parsedEth);
  // // { BigNumber: "1000000000000000000" }

  console.log('1111')

})();

// // Use the mainnet
// // const network = "homestead";
// const network = 42;

// // Specify your own API keys
// // Each is optional, and if you omit it the default
// // API key for that service will be used.
// const provider = ethers.getDefaultProvider(network, {
//     etherscan: YOUR_ETHERSCAN_API_KEY,
//     infura: YOUR_INFURA_PROJECT_ID,
//     // Or if using a project secret:
//     // infura: {
//     //   projectId: YOUR_INFURA_PROJECT_ID,
//     //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
//     // },
//     alchemy: YOUR_ALCHEMY_API_KEY,
//     pocket: YOUR_POCKET_APPLICATION_KEY
//     // Or if using an application secret key:
//     // pocket: {
//     //   applicationId: ,
//     //   applicationSecretKey:
//     // }
// });
