import tx from './tx';
import dpath from './dpath';

export default {

  webUrl: 'http://47.75.74.35:8000',

  defaultPricePrecision: 8,
  defaultAmountPrecision: 4,
  defaultExpireTime: 3600 * 24 * 365 * 10, // 秒

  defaultGasPrice: 8,
  defaultGasLimit: '0x186a0',
  loopInterval: 30000,
  localStorageVersion: '201901011200',
  approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  minAllowance: 10 ** 30,
  appId: '1234567',

  // 测试节点
  defaultServer: 'http://47.75.74.35/openapi',
  webSocketServer: 'ws://47.75.74.35/wss/v1',

  gethServer: 'https://ropsten.infura.io/v3/c5ae44a788ef43f0a3cfe4c6a77c71e6',
  hydroExchangeAddress: '0xaba80a6f1d60a1feff034ab3820c8d98bd6cbe46',
  hydroProxyAddress: '0x1b9540f50b3b9dde35cea9a403026a78965234ac',
  chainId: 3,

  addressZero: '0x0000000000000000000000000000000000000000',
  hashZero: '0x0000000000000000000000000000000000000000000000000000000000000000',
  // 本地测试节点
  // defaultServer: 'https://api-sandbox.i.ddex.io',
  // webSocketServer: 'https://ws-sandbox.i.ddex.io',
  // gethServer: 'http://0.0.0.0:8545',
  // hydroExchangeAddress: '0x5c0286bef1434b07202a5ae3de38e66130d5280d',
  // hydroProxyAddress: '0x04f67e8b7c39a25e100847cb167460d715215feb',
  // chainId: 1,

  // fundraisingToken: 'CER',
  // appDownload: '这是下载二维码',

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
