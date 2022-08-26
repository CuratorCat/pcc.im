import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { AddressItem } from 'components/Addresses/AddressItem'
import { multichainAddresses } from 'constants/data'
import { useEnsAddressValue } from 'utils/EnsRecords'

export default function Addresses(props) {
  if (props.data.length !== multichainAddresses.length) {
    return (
      <div className="relative w-full mx-0 group">
        <div className="flex justify-between items-center ">
          <h3 className="text-4xl text-violet-400 font-light py-1 transition-all duration-300">addresses</h3>
          <div className="mr-3 h-2 w-2 bg-violet-400 rounded-full animate-ping" />
        </div>
      </div>
    )
  }

  if (props.data.filter(item => item.value !== '').length === 0) {
    return null
  }

  props.data.sort((a, b) => b.coinType - a.coinType)

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
                {
                  // ethAddress
                  useEnsAddressValue(props.data, 60) != null && useEnsAddressValue(props.data, 60) != '' && (
                    <AddressItem type="eth" address={useEnsAddressValue(props.data, 60)} />
                  )
                }

                {
                  // btcAddress
                  useEnsAddressValue(props.data, 0) != null && useEnsAddressValue(props.data, 0) != '' && (
                    <AddressItem type="btc" address={useEnsAddressValue(props.data, 0)} />
                  )
                }
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
