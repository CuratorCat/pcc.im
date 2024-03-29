import Link from 'next/link'
export function Footer() {
  return (
    <footer className="justify-center p-6 sm:px-1 text-sm">
      <p className="text-white/50 hover:text-white/75">
        <Link href="/">pcc.im</Link> is created by{' '}
        <Link href="/curatorcat.pcc.eth">
          <a className="underline">curatorcat.pcc.eth</a>
        </Link>{' '}
        for fun. it's currently in alpha preview and may not be stable.
      </p>
      <p className="text-xs mt-2 uppercase text-white/25 hover:text-white">
        pcc.im does not log your information or use any 3rd-party trackers. also, it does not store data of ens, all
        data are queried by your browser via infura's blockchain rpc.
      </p>
    </footer>
  )
}
