import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import {
  SocialTwitter,
  SocialInstagram,
  SocialTiktok,
  SocialGithub,
  SocialDiscord,
  SocialTelegram,
  SocialLinkedin
} from './SocialLinks'

export default function Socials(props) {
  if (
    props.twitter == null ||
    props.github == null ||
    props.instagram == null ||
    props.tiktok == null ||
    props.discord == null ||
    props.linkedin == null ||
    props.telegram == null
  ) {
    return (
      <div className="relative w-full mx-0 group">
        <div className="flex justify-between items-center ">
          <h3 className="text-4xl text-violet-400 font-light py-1 transition-all duration-300">socials</h3>
          <div className="mr-3 h-2 w-2 bg-violet-400 rounded-full animate-ping" />
        </div>
      </div>
    )
  }

  if (
    props.twitter == '' &&
    props.github == '' &&
    props.instagram == '' &&
    props.tiktok == '' &&
    props.discord == '' &&
    props.linkedin == '' &&
    props.telegram == ''
  )
    return null

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
                <SocialTwitter social={props.twitter} />
                <SocialInstagram social={props.instagram} />
                <SocialTiktok social={props.tiktok} />
                <SocialDiscord social={props.discord} />
                <SocialTelegram social={props.telegram} />
                <SocialGithub social={props.github} />
                <SocialLinkedin social={props.github} />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
