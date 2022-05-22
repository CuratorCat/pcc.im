import Link from 'next/link'
export function Footer() {
  return (
    <footer className=" flex-col bottom-0 justify-center px-6 py-6 mt-12 text-sm text-white/50 bg-black/20">
      <p>pcc.im is curretly in beta.</p>
      <p>
        it is created by{' '}
        <Link href="/curatorcat.pcc.eth">
          <a className="underline">curatorcat.pcc.eth</a>
        </Link>{' '}
        for fun. it does not track your information or use any 3rd-party trackers.
      </p>
    </footer>
  )
}
