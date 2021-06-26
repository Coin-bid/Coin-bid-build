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

  NFTAuction: '0x9e67E457eb32910e561CDA7822189911a90aBf9b',
  CBDToken: '0xd11BCE88b552C10b979bD8a2d421c6555e86292B',
  coinbidCreation: '0x2f6d7Ac8BC3aA12cfB0576c02fafc41B6905C4b5',
  mining: '0x9BD130bbF41694252A84715ca8EFDc77987bb6c2',
  NFTFactory: '0xB5178bD57d39FCE6B25Fa63C47D1F1bEd0e8041a',
  canvasAuction: '0x42d46c5f2378742ef143ebE6B5682aDE22BA7750',
};
