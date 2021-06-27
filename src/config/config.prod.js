import tx from './tx';
import dpath from './dpath';

export default {

  webUrl: 'https://www.cent.vc',

  defaultPricePrecision: 8,
  defaultAmountPrecision: 4,
  defaultExpireTime: 3600 * 24 * 365 * 10, // 秒

  defaultGasPrice: 8,
  defaultGasLimit: '0x186a0',
  loopInterval: 15000,
  localStorageVersion: '201904220208',
  approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  minAllowance: 10 ** 30,
  appId: '578c121f8013419fbccef488afda7143',

  defaultServer: 'https://openapi.fvex.io',
  webSocketServer: 'wss://ws.cent.vc/v1',

  gethServer: 'https://mainnet.infura.io/v3/c5ae44a788ef43f0a3cfe4c6a77c71e6',
  hydroExchangeAddress: '0xe2a0bfe759e2a4444442da5064ec549616fff101',
  hydroProxyAddress: '0x74622073a4821dbfd046E9AA2ccF691341A076e1',
  chainId: 1,

  addressZero: '0x0000000000000000000000000000000000000000',
  hashZero: '0x0000000000000000000000000000000000000000000000000000000000000000',

  tx,
  dpath,

  appDownload: '这是下载二维码',

  NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',

};
