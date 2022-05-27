import { Layout } from 'layouts'
import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'
import { DuplicateIcon, LinkIcon, MailIcon, HashtagIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { ExternalLinkIcon, PencilAltIcon, HomeIcon, RefreshIcon } from '@heroicons/react/solid'

import { TwitterLogo, GithubLogo, InstagramLogo, TiktokLogo, EthereumLogo } from 'components/icons'
import { useRouter } from 'next/router'
import { BitcoinLogo } from 'components/icons'

export default function Test() {
  const router = useRouter()
  return (
    <>
      <Layout>
        {/* head start */}
        <div className="flex z-40 items-center content-between space-x-2 -ml-6 -mt-6 -mr-6 sm:-ml-4 sm:-mt-4 sm:-mr-4 p-2 sm:p-1 bg-violet-400/25 opacity-0 hover:opacity-100 rounded-none sm:rounded-full transition-all duration-150 backdrop-blur-lg">
          <div className="flex">
            <Link href="/">
              <div className="flex shrink-0 w-10 rounded-lg sm:rounded-full text-white hover:bg-black/50 cursor-pointer">
                <HomeIcon className="w-full h-full p-2.5 " />
              </div>
            </Link>

            <div onClick={() => router.reload()}>
              <div className="flex shrink-0 w-10 rounded-lg sm:rounded-full text-white hover:bg-black/50 cursor-pointer">
                <RefreshIcon className="w-full h-full p-2.5 " />
              </div>
            </div>
          </div>

          <div className="grow"></div>
        </div>
        {/* head end */}

        <div className="profile-view z-10 -top-6">
          <h3 className="text-3xl pb-3">purrfile</h3>
          <div className="flex space-x-4 my-3">
            <div className="flex shrink-0">
              <img
                src="https://metadata.ens.domains/mainnet/avatar/curatorcat.eth"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden"
                alt=""
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight break-all">curatorcat.pcc.eth</h2>
              <div>
                <p className="inline-block text-xs px-2 py-0.5 font-semibold tracking-wider  rounded-full bg-black/20 text-white/50">
                curatorcat.pcc.eth
                </p>
              </div>
              <div>
                <p className="text-sm text-violet-500 font-semibold tracking-wider">
                  0xCCA1····3eeE{' '}
                  <span>
                    <DuplicateIcon className="-mt-1 w-4 h-4 inline-block opacity-75" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5 leading-snug">
            <p className="font-medium">
              A friendly neighborhood CuratorCat, now curating https://pcc-archive.org for PCC community. #WeAreThePurrs
              & #WeLoveThePurrs
            </p>

            <ul role="list" className="profile-links">
              <li>
                <LinkIcon className="icon" aria-hidden="true" />

                <Link href="#">
                  <a>
                    <span>https://vitalik.ca</span>
                    <ExternalLinkIcon className="indicator" />
                  </a>
                </Link>
              </li>
              <li>
                <MailIcon className="icon" aria-hidden="true" />

                <Link href="#">
                  <a>
                    <span>arachnid@notdot.net</span>
                    <PencilAltIcon className="indicator" />
                  </a>
                </Link>
              </li>
              <li>
                <HashtagIcon className="icon" aria-hidden="true" />
                <div>ipfs://QmQs98YJ6ynaeEQQ2t6j7H36hQyBNRVV1URptK8EjywKqi</div>
              </li>
            </ul>
          </div>

          <Socials />
          <Addresses />
        </div>
      </Layout>
    </>
  )
}

function Socials() {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative w-full mx-0 cursor-pointer group">
            <div
              className={`${
                open ? 'hidden' : 'bg-black/20'
              } absolute inset-0 z-20 rounded-2xl -mx-3 text-3xl py-3 text-left px-3`}
            >
              socials
            </div>
            <div className="flex justify-between items-center">
              <h3 className={`${open ? '' : 'opacity-0'} text-3xl py-3`}>socials</h3>
              <ChevronDownIcon
                className={`${
                  open ? '-scale-100' : ''
                } h-8 w-8 opacity-20 group-hover:opacity-100 transition-all duration-300`}
              />
            </div>
          </Disclosure.Button>

          {/*
              Don't forget to add `static` to your Disclosure.Panel!
            */}
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static as="div" className="leading-none">
              <div className="social-links">
                <a href="#" className="text-blue-500">
                  <TwitterLogo className="social-logo ml-1" />
                  <span>CuratorCatPCC</span>
                  <ExternalLinkIcon className="indicator" />
                </a>

                <a href="#" className="text-black">
                  <GithubLogo className="social-logo" />
                  <span>CuratorCat</span>
                  <ExternalLinkIcon className="indicator" />
                </a>

                <a href="#" className="text-pink-500">
                  <InstagramLogo className="social-logo" />
                  <span>purrnelopes_country_club</span>
                  <ExternalLinkIcon className="indicator" />
                </a>

                <a href="#" className="text-black">
                  <TiktokLogo className="social-logo" />
                  <span>purrs_cc</span>
                  <ExternalLinkIcon className="indicator" />
                </a>

                <a href="#" className="text-pink-500">
                  <InstagramLogo className="social-logo" />
                  <span>
                    long long longnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongname
                    longname
                  </span>
                  <ExternalLinkIcon className="indicator" />
                </a>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

function Addresses() {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative w-full mx-0 cursor-pointer group">
            <div
              className={`${
                open ? 'hidden' : 'bg-black/20'
              } absolute inset-0 z-20 rounded-2xl -mx-3 text-3xl py-3 text-left px-3`}
            >
              addresses
            </div>
            <div className="flex justify-between items-center">
              <h3 className={`${open ? '' : 'opacity-0'} text-3xl py-3`}>addresses</h3>
              <ChevronDownIcon
                className={`${
                  open ? '-scale-100' : ''
                } h-8 w-8 opacity-20 group-hover:opacity-100 transition-all duration-300`}
              />
            </div>
          </Disclosure.Button>

          {/*
              Don't forget to add `static` to your Disclosure.Panel!
            */}
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static as="div" className="leading-none">
              <ul className="addresses-list">
                <li>
                  <EthereumLogo className="logo" />
                  <div className="asset">
                    <h4>ethereum</h4>
                    <div className="address">0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5</div>
                  </div>
                </li>
                <li>
                  <BitcoinLogo className="logo" />
                  <div className="asset">
                    <h4>bitcoin</h4>
                    <div className="address">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</div>
                  </div>
                </li>
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
