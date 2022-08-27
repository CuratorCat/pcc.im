import { EnsCrytoAddressQueryType, EnsCrytoAddressType } from 'types'

export const multichainAddressesQuery: EnsCrytoAddressQueryType[] = [
  {
    coinType: 0,
    address: null,
  },
  {
    coinType: 2,
    address: null,
  },
  {
    coinType: 3,
    address: null,
  },
  {
    coinType: 60,
    address: null,
  },
]

export const multichainAddresses: EnsCrytoAddressType[] = [
  {
    coinType: 0,
    crypto: 'Bitcoin',
    symbol: 'BTC',
    icon: '/icons/bitcoin.png',
    blockExplorer: {
      name: 'BTC.com',
      icon: '/icons/icon-512x512.png',
      url: 'https://explorer.btc.com',
      addressUrl: 'https://explorer.btc.com/btc/address/$$ADDRESS$$',
    },
  },
  {
    coinType: 2,
    crypto: 'Litecoin',
    symbol: 'LTC',
    icon: '/icons/litecoin.png',
    blockExplorer: {
      name: 'litecoinblockexplorer.net',
      icon: '/icons/icon-512x512.png',
      url: 'https://litecoinblockexplorer.net/',
      addressUrl: 'https://litecoinblockexplorer.net/address/$$ADDRESS$$',
    },
  },
  {
    coinType: 3,
    crypto: 'Dogecoin',
    symbol: 'DOGE',
    icon: '/icons/dogecoin.png',
    blockExplorer: {
      name: 'dogeblocks.com',
      icon: '/icons/icon-512x512.png',
      url: 'https://dogeblocks.com/',
      addressUrl: 'https://dogeblocks.com/address/$$ADDRESS$$',
    },
  },
  {
    coinType: 60,
    crypto: 'Ethereum',
    symbol: 'ETH',
    icon: '/icons/ethereum.png',
    blockExplorer: {
      name: 'Etherscan',
      icon: '/icons/icon-512x512.png',
      url: 'https://etherscan.io/',
      addressUrl: 'https://etherscan.io/address/$$ADDRESS$$',
    },
  },
]
