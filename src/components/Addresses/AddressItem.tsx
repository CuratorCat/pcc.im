import { DuplicateIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { copyTextWithToast } from 'functions/CopyHelpers'
import Link from 'next/link'

export const AddressItem = ({ data, chainData }) => (
  <li>
    <img src={chainData.icon} className="logo" alt={`${chainData.crypto} Logo`} />
    <div className="asset">
      <h4>{chainData.crypto}</h4>
      <div className="address">{data.address}</div>
    </div>
    {chainData.blockExplorer ? (
      <div>
        <Link href={chainData.blockExplorer.addressUrl.replace('$$ADDRESS$$', data.address)}>
          <a
            target="_blank"
            className="text-violet-400/40 hover:cursor-pointer text-sm group font-semibold tracking-wider hover:text-violet-400 "
            title={`View on ${chainData.blockExplorer.name}`}
          >
            <ExternalLinkIcon className="h-8 w-8 p-1 bg-black/10 rounded-lg text-violet-400/25 hover:text-violet-400 transition-all duration-150" />
          </a>
        </Link>
      </div>
    ) : null}
    <div
      onClick={() => {
        copyTextWithToast(data.address)
      }}
      title="Copy address"
      className="hover:cursor-pointer"
    >
      <DuplicateIcon className="h-8 w-8 p-1 bg-black/10 rounded-lg text-violet-400/25 hover:text-violet-400 transition-all duration-150" />
    </div>
  </li>
)
