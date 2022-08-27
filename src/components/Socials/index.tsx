import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useEnsTextValue } from 'utils/EnsRecords'
import {
  SocialTwitter,
  SocialInstagram,
  SocialTiktok,
  SocialGithub,
  SocialDiscord,
  SocialTelegram,
  SocialLinkedin,
} from './SocialLinks'

export const socialTextsQuery = [
  'com.twitter',
  'com.instagram',
  'com.tiktok',
  'com.discord',
  'org.telegram',
  'com.github',
  'com.linkedin',
]

export function Socials(props) {
  if (props.data.length !== socialTextsQuery.length) {
    return (
      <div className="relative w-full mx-0 group">
        <div className="flex justify-between items-center ">
          <h3 className="text-4xl text-violet-400 font-light py-1 transition-all duration-300">socials</h3>
          <div className="mr-3 h-2 w-2 bg-violet-400 rounded-full animate-ping" />
        </div>
      </div>
    )
  }

  if (props.data.filter(item => item.value !== '').length == 0) return null

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
                socials
                <span className={`${open ? 'opacity-0' : 'opacity-100'} text-base px-2`}>
                  ({props.data.filter(item => item.value !== '').length})
                </span>
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
              <div className="social-links">
                <SocialTwitter social={useEnsTextValue(props.data, 'com.twitter')} />
                <SocialInstagram social={useEnsTextValue(props.data, 'com.instagram')} />
                <SocialTiktok social={useEnsTextValue(props.data, 'com.tiktok')} />
                <SocialDiscord social={useEnsTextValue(props.data, 'com.discord')} />
                <SocialTelegram social={useEnsTextValue(props.data, 'org.telegram')} />
                <SocialGithub social={useEnsTextValue(props.data, 'com.github')} />
                <SocialLinkedin social={useEnsTextValue(props.data, 'com.linkedin')} />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
