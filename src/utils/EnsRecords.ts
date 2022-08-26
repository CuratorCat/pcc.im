import { EnsTextType, EnsCrytoAddressType } from 'types'

export const useEnsTextValue = (data: EnsTextType[], key: string) => data.filter(item => item.key == key)[0].value

export const useEnsAddressValue = (data: EnsCrytoAddressType[], coinType: number) =>
  data.filter(item => item.coinType == coinType)[0].address
