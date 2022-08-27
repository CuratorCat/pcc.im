type Nullable<T> = T | null

export interface EnsTextType {
  key: string
  value: Nullable<string>
}

export type EnsCrytoAddressQueryType = {
  coinType: number
  address: Nullable<string>
}

export type EnsCrytoAddressType = {
  coinType: number
  crypto: string
  symbol: string
  icon: string
  blockExplorer?: {
    name: string
    icon: string
    url: string
    addressUrl: string
  }
}
