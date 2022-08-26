type Nullable<T> = T | null

export interface EnsTextType {
  key: string
  value: Nullable<string>
}

export type EnsCrytoAddressQueryType = {
  coinType: number
  address: Nullable<string>
}

export type EnsCrytoAddressType = EnsCrytoAddressQueryType & {
  crypto: string
  symbol: string
  icon: string
}
