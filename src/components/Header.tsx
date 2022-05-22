import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="flex items-center p-6">
        <Link href="/">
          <a tabIndex={-1}>
            <h1 className="text-4xl font-light tracking-wider relative">
              <span>pcc.im</span>

              <p className="text-2xl font-light">show your ens profile</p>
            </h1>
          </a>
        </Link>
        <div className="bg-black/50 p-1 rounded text-xs italic opacity-50 not-sr-only">beta</div>
      </header>
    </>
  )
}
