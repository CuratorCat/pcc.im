import Link from "next/link"

export default function EnsBadge(ens, primaryEns) {
  if (!primaryEns) {
    return (
      <span className="px-2 py-0.5 rounded-full break-all line-clamp-1 text-xs font-bold bg-black/20 text-violet-400/25 uppercase">
        No Primary ENS
      </span>
    )
  }
  if (ens.toLowerCase() === primaryEns.toLowerCase()) {
    return (
      <span className="px-2 py-0.5 rounded-full break-all line-clamp-1 text-xs font-bold bg-violet-400 text-black/50 uppercase">
        Primary ENS
      </span>
    )
  }
  return (
    <span className="px-2 py-0.5 rounded-full break-all line-clamp-1 text-xs font-bold bg-violet-400 text-black/50">
      <Link href={'/' + primaryEns}>{primaryEns}</Link>
    </span>
  )
}