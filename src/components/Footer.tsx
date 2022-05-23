import Link from 'next/link'
export function Footer() {
  return (
    <footer className=" flex-col bottom-0 justify-center px-6 py-6 mt-12 text-sm  bg-black/20">
      <p className="text-white/50 hover:text-white/75">
        <Link href="/">pcc.im</Link> is created by{' '}
        <a href="/curatorcat.pcc.eth" className="underline">
          curatorcat.pcc.eth
        </a>
        for fun. it's currently in beta and may change a lot.
      </p>
      <p className="text-xs mt-2 font-thin uppercase text-white/25 hover:text-white">
        pcc.im does not track your information or use any 3rd-party trackers. also, it does not store data of ens, all
        data are queried from your browser via infura's blockchain rpc.
      </p>
    </footer>
  )
}
