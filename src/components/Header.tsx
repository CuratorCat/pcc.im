import Link from 'next/link'
import { HomeIcon, RefreshIcon, InformationCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()
  let currentUrl = ''

  return (
    <header className="flex items-center py-2 px-2 sm:px-0 sm:py-3 space-x-2 opacity-0 sm:opacity-50 hover:opacity-100 transition-all duration-300">
      <div className="flex space-x-2">
        <Link href="/">
          <a
            className="flex shrink-0 w-8 sm:w-10 rounded-2xl text-violet-100/20 hover:text-white bg-violet-100/0 hover:bg-violet-100/10 cursor-pointer transition-all duration-300"
            tabIndex={-1}
          >
            <HomeIcon className="w-full h-full p-1.5 sm:p-2.5 " />
          </a>
        </Link>

        <Link href="#">
          <a
            className="flex shrink-0 w-8 sm:w-10 rounded-2xl text-violet-100/20 hover:text-white bg-violet-100/0 hover:bg-violet-100/10 cursor-pointer transition-all duration-300"
            onClick={() => router.reload()}
            tabIndex={-1}
          >
            <RefreshIcon className="w-full h-full p-1.5 sm:p-2.5 " />
          </a>
        </Link>
      </div>
      <div className="px-3 py-2 truncate text-white/25 bg-black/0 w-full hover:bg-black/0 rounded-2xl transition-all duration-300">
        {currentUrl}
      </div>
      <div className="flex space-x-2">
        <Link href="/@about">
          <a
            className="flex shrink-0 w-8 sm:w-10 rounded-2xl text-violet-100/20 hover:text-white bg-violet-100/0 hover:bg-violet-100/10 cursor-pointer transition-all duration-300"
            tabIndex={-1}
          >
            <InformationCircleIcon className="w-full h-full p-1 sm:p-2" />
          </a>
        </Link>
      </div>
    </header>
  )
}

export function HeaderBrand() {
  return (
    <div className="block">
      <Link href="/">
        <a tabIndex={-1}>
          <h1 className="text-4xl font-light relative">
            pcc.im
            <p className="text-2xl font-light relative">
              show your ens profile
              <span className="absolute bg-black/50 p-1 ml-1 -top-2 rounded text-xs opacity-50 not-sr-only">alpha</span>
            </p>
          </h1>
        </a>
      </Link>
    </div>
  )
}
