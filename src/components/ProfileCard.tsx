import { useState } from 'react'
import { provider } from 'provider'
import { Avatar } from './Avatar'
import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'



function trimUrl(url = '') {
  return url
    .replace(/^(https:\/\/)/i, '')
    .replace(/^(http:\/\/)/i, '')
    .replace(/(\/)$/i, '')
}

function formatTwitterHandle(str = '') {
  return str
    .replace(/^(https:\/\/twitter.com\/)/i, '')
    .replace(/^(http:\/\/twitter.com\/)/i, '')
    .replace(/^(@)/i, '')
    .replace(/(\/)$/i, '')
}

function formatGithubHandle(str = '') {
  return str
    .replace(/^(https:\/\/github.com\/)/i, '')
    .replace(/^(http:\/\/github.com\/)/i, '')
    .replace(/^(@)/i, '')
    .replace(/(\/)$/i, '')
}

function formatInstagramHandle(str = '') {
  return str
    .replace(/^(https:\/\/instagram.com\/)/i, '')
    .replace(/^(http:\/\/instagram.com\/)/i, '')
    .replace(/^(@)/i, '')
    .replace(/(\/)$/i, '')
}

export function ProfileCard(props) {
  if (!props.ens) {
    return null
  }

  const [avatar, setAvatar] = useState(null)
  const [description, setDescription] = useState(null)
  const [url, setUrl] = useState(null)
  const [contentHash, setContentHash] = useState(null)
  const [email, setEmail] = useState(null)
  const [twitter, setTwitter] = useState(null)
  const [github, setGithub] = useState(null)
  const [instagram, setInstagram] = useState(null)
  const [facebook, setFacebook] = useState(null)
  const [tiktok, setTiktok] = useState(null)
  const [telegram, setTelegram] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const resolver = await provider.getResolver(props.ens)

      resolver.getText('avatar').then(result => {
        result ? setAvatar(result) : setAvatar('')
      })

      resolver.getText('description').then(result => {
        result ? setDescription(result) : setDescription('')
      })

      // get contentHash
      if (!props.ens.endsWith('.pcc.eth')) {
        resolver.getContentHash().then(result => {
          result ? setContentHash(result) : setContentHash('')
        })
      } else {
        setContentHash('')
      }

      resolver.getText('email').then(result => {
        result ? setEmail(result) : setEmail('')
      })

      resolver.getText('url').then(result => {
        result ? setUrl(result) : setUrl('')
      })

      resolver.getText('com.github').then(result => {
        result ? setGithub(result) : setGithub('')
      })

      resolver.getText('com.instagram').then(result => {
        result ? setInstagram(result) : setInstagram('')
      })

      resolver.getText('com.facebook').then(result => {
        result ? setFacebook(result) : setFacebook('')
      })

      resolver.getText('com.tiktok').then(result => {
        result ? setTiktok(result) : setTiktok('')
      })

      resolver.getText('com.telegram').then(result => {
        result ? setTelegram(result) : setTelegram('')
      })

      resolver.getText('com.twitter').then(result => {
        result ? setTwitter(result) : setTwitter('')
      })
    }

    fetchData().catch(console.error)
  }, [])

  function primaryEnsBadge(ens, primaryEns) {
    if (!primaryEns) {
      return (
        <div className="w-fit px-2 py-0.5 rounded-full bg-black/10  text-xs uppercase text-white/25">
          no primary ens
        </div>
      )
    }
    if (ens.toLowerCase() === primaryEns.toLowerCase()) {
      return (
        <div className="w-fit px-2 py-0.5 rounded-full bg-[#866EC9] text-[#473A74] text-xs font-semibold uppercase">
          primary ens
        </div>
      )
    }
    return (
      <div className="w-fit px-2 py-0.5 rounded-full bg-[#866EC9] text-[#473A74] text-xs font-semibold">
        <Link href={'/' + primaryEns}>{primaryEns}</Link>
      </div>
    )
  }

  const Bio = () => {
    if (description == null && url == null && email == null && contentHash == null) {
      return <div className="w-full h-30">looking up socials</div>
    }
    if (description == '' && url == '' && email == '' && contentHash == '') {
      return <div className="w-full h-30">no bio</div>
    }
    return (
      <>
        <p>{description === null ? looking : description == '' ? '' : description}</p>
        <div className="break-all">
          <p>
            {url === null ? (
              looking
            ) : url == '' ? (
              ''
            ) : (
              <>
                🔗 <Link href={'https://' + trimUrl(url)}>{trimUrl(url)}</Link>
              </>
            )}
          </p>
          <p>{contentHash === null ? looking : contentHash == '' ? '' : '#️⃣ ' + contentHash}</p>
          <p>
            {email === null ? (
              looking
            ) : email == '' ? (
              ''
            ) : (
              <>
                <a href={'mailto:' + email}>📧 {email}</a>
              </>
            )}
          </p>
        </div>
      </>
    )
  }

  const Socials = () => {
    if (twitter == null && github == null) {
      return <div className="w-full h-30">looking up socials</div>
    }
    if (twitter == '' && github == '') {
      return <>no social</>
    }
    return (
      <>
        {twitter == '' || twitter == null ? (
          ''
        ) : (
          <p>
            <span className="block mt-2 uppercase text-white/50 text-md">twitter</span>
            {formatTwitterHandle(twitter)}
          </p>
        )}
        {github === '' ? (
          ''
        ) : (
          <p>
            <span className="block mt-2 uppercase text-white/50 text-md">github</span>
            {github}
          </p>
        )}
      </>
    )
  }

  return (
    <div>
      <H3>{props.ens.endsWith('.pcc.eth') ? 'purrfile' : 'profile'}</H3>
      <Avatar avatar={avatar} ens={props.ens} />
      <div>
        <p className="text-2xl">{props.ens}</p>
        {primaryEnsBadge(props.ens, props.primaryEns)}
      </div>
      <Bio />
      <H3>socials</H3>
      <Socials />

      {/* <Example /> */}

      <H3>addresses</H3>
      <p className="break-all">
        <span className="block mt-2 uppercase text-white/50 text-md">ethereum</span>
        {props.address}
      </p>
    </div>
  )
}

const looking = <span className="inline-block animate-bounce">👀</span>

function H3({ children }) {
  return (
    <>
      <h3 className="text-4xl mt-3 mb-3 font-light text-violet-400">{children}</h3>
    </>
  )
}

function Example() {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative w-full mx-0 rounded-lg">
            <div className={`${open ? '' : 'bg-black/10'} absolute inset-0  -ml-3 -mr-3 rounded-lg`}></div>
            <div className="flex w-full justify-between items-center">
              <H3>socials</H3>
              <ChevronUpIcon className={`${open ? 'rotate-180' : ''} h-8 w-8 opacity-10 `} />
            </div>
          </Disclosure.Button>

          {/*
              Don't forget to add `static` to your Disclosure.Panel!
            */}
          <Disclosure.Panel>
            If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full,
            no questions asked. If you're unhappy with your purchase for any reason, email us within 90 days and we'll
            refund you in full, no questions asked. If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked. If you're unhappy with your purchase for any
            reason, email us within 90 days and we'll refund you in full, no questions asked.If you're unhappy with your
            purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.If you're
            unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no
            questions asked.If you're unhappy with your purchase for any reason, email us within 90 days and we'll
            refund you in full, no questions asked.If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.If you're unhappy with your purchase for any
            reason, email us within 90 days and we'll refund you in full, no questions asked.If you're unhappy with your
            purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
