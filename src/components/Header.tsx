import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="flex items-center p-6">
        <Link href="/">
          <a tabIndex={-1}>
            <h1 className="text-4xl font-medium tracking-wider">
              <span>pcc.im</span>
              <p className="text-2xl tracking-wide">ens profile</p>
            </h1>
          </a>
        </Link>
      </header>
    </>
  )
}
