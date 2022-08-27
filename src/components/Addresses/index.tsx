import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { multichainAddresses } from 'constants/data'
import { AddressItem } from './AddressItem'

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

  const data = props.data.filter(data => data.address !== '')
  data.sort((a, b) => a.coinType - b.coinType)

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
                {data.map(data => (
                  <AddressItem
                    data={data}
                    chainData={multichainAddresses.filter(item => item.coinType == data.coinType)[0]}
                    key={data.coinType}
                  />
                ))}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
