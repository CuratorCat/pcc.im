import { ethers } from 'ethers'

export const provider = ethers.providers.InfuraProvider.getWebSocketProvider()

// export const provider = new ethers.providers.InfuraProvider(1, process.env.infuraKey)
