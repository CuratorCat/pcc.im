import Link from 'next/link'
export function Footer() {
  <footer className="flex flex-col justify-center px-6 mt-12 text-sm text-white/50 bg-black/20">
    <p>
      this website is created by{' '}
      <Link href="/curatorcat.pcc.eth">
        <a className="underline">curatorcat.pcc.eth</a>{' '}
      </Link>
      for fun
    </p>
    <p>this website does not track your information</p>
    <p>
      <Link href="#">
        <a className="underline">about this website</a>
      </Link>
    </p>
  </footer>
}
