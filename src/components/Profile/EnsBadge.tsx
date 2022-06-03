import Link from 'next/link'

export const EnsBadge = ({ ens = null, primaryEns = null }) => {
  return primaryEns === null ? (
    <span className="ens-badge loading">
      <span className="indicator" />
      Checking Primary ENS
    </span>
  ) : primaryEns === '' ? (
    <span className="ens-badge no-primary">No Primary ENS</span>
  ) : ens.toLowerCase() === primaryEns.toLowerCase() ? (
    <span className="ens-badge primary">Primary ENS</span>
  ) : (
    <span className="ens-badge alt">
      <Link href={'/' + primaryEns}>{primaryEns}</Link>
    </span>
  )
}