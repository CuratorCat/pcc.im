import { EnsTextType } from 'types'

export const useEnsTextValue = (data: EnsTextType[], key: string) => data.filter(item => item.key == key)[0].value
