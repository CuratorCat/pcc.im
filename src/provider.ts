import { ethers } from 'ethers'

export const provider = process.env.useWebSocket
  ? ethers.providers.InfuraProvider.getWebSocketProvider(1, process.env.infuraKey)
  : new ethers.providers.InfuraProvider(1, process.env.infuraKey)
