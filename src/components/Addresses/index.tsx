import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, DuplicateIcon } from '@heroicons/react/outline'
import { EthereumLogo, BitcoinLogo } from 'components/icons'
import { CopyToClipboard } from 'components/CopyToClipboard'

export default function Addresses(props) {
  if (props.ethAddress == null || props.btcAddress == null) {
    return (
      <div className="relative w-full mx-0 group">
        <div className="flex justify-between items-center ">
          <h3 className="text-4xl text-violet-400 font-light py-1 transition-all duration-300">addresses</h3>
          <div className="mr-3 h-2 w-2 bg-violet-400 rounded-full animate-ping" />
        </div>
      </div>
    )
  }

  if (props.ethAddress == '' && props.btcAddress == '') return null

  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative w-full mx-0 cursor-pointer group">
            <div className="flex justify-between items-center ">
              <h3
                className={`${
                  open ? '' : 'opacity-50 group-hover:opacity-100'
                } text-4xl text-violet-400 font-light py-1 transition-all duration-300`}
              >
                addresses
              </h3>
              <ChevronDownIcon
                className={`${
                  open ? '-scale-100' : ''
                } h-8 w-8 text-violet-400/25 group-hover:text-violet-400 transition-all duration-300`}
              />
            </div>
          </Disclosure.Button>

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
                {props.ethAddress == '' && props.btcAddress == '' ? (
                  <div className="opacity-50">no supported blockchain addresses found</div>
                ) : null}

                {props.ethAddress != null && props.ethAddress != '' ? (
                  <li>
                    <EthereumLogo className="logo bg-white" />
                    <div className="asset">
                      <h4>ethereum</h4>
                      <div className="address">{props.ethAddress}</div>
                    </div>
                    <div>
                      <CopyToClipboard copyText={props.ethAddress}>
                        <DuplicateIcon className="h-8 w-8 p-1 rounded-lg text-violet-400/25 hover:text-violet-400" />
                      </CopyToClipboard>
                    </div>
                  </li>
                ) : null}

                {props.btcAddress != null && props.btcAddress != '' ? (
                  <li>
                    <BitcoinLogo className="logo" />
                    <div className="asset">
                      <h4>bitcoin</h4>
                      <div className="address">{props.btcAddress}</div>
                    </div>
                    <div>
                      <CopyToClipboard copyText={props.btcAddress}>
                        <DuplicateIcon className="h-8 w-8 p-1 rounded-lg text-violet-400/25 hover:text-violet-400" />
                      </CopyToClipboard>
                    </div>
                  </li>
                ) : null}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
