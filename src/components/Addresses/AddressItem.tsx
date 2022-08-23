import { DuplicateIcon } from '@heroicons/react/outline'
import { EthereumLogo, BitcoinLogo } from 'components/icons'
import { copyTextWithToast } from 'functions/CopyHelpers'

export const AddressItem = ({ type = null, address = null }) => {
  if (type === null || address === null) return null
  return (
    <li>
      {type === 'eth' ? (
        <EthereumLogo className="logo bg-white" />
      ) : type === 'btc' ? (
        <BitcoinLogo className="logo" />
      ) : (
        ''
      )}
      <div className="asset">
        <h4>{type === 'eth' ? 'ethereum' : type === 'btc' ? 'bitcoin' : ''}</h4>
        <div className="address">{address}</div>
      </div>
      <div>
        <button
          onClick={() => {
            copyTextWithToast(address)
          }}
        >
          <DuplicateIcon className="h-8 w-8 p-1 rounded-lg text-violet-400/25 hover:text-violet-400 transition-all duration-150" />
        </button>
      </div>
    </li>
  )
}
