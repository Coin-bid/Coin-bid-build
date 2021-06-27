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

  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',

  NFTAuction: '0x009d0041eC76922E204dCB654af60b0d7B543508',
  NFTFactory: '0xf55B03d97E328efFd8978400696927815c720DF4',
  coinBid: '0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f',
  coinbidCreation: '0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1',
  mining: '0x01059878426a07E831493c0eAcD8822b597b90c3',
  canvasAuction: '0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6',

  // CoinBid			0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f
  // CoinBidCreation		0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1
  // NFTFactory		0xf55B03d97E328efFd8978400696927815c720DF4
  // Mining			0x01059878426a07E831493c0eAcD8822b597b90c3
  // CanvasAuction		0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6
  // NFTAuction		0x009d0041eC76922E204dCB654af60b0d7B543508
};
