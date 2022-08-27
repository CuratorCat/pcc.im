import Link from 'next/link'
import { formatUrl } from 'functions/SocialHelpers'
import { copyTextWithToast } from 'functions/CopyHelpers'
import { DuplicateIcon, GlobeAltIcon, MailIcon, HashtagIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { useEnsTextValue } from 'utils/EnsRecords'

export const bioTextsQuery = ['description', 'url', 'email', 'notice']

export function Bio(props) {
  if (props.data.length !== bioTextsQuery.length + 1) {
    return <div className="w-full py-3 animate-pulse">looking up bio</div>
  }

  if (props.data.filter(item => item.value !== '').length === 0) {
    return null
  }

  const bioValue = key => {
    return useEnsTextValue(props.data, key)
  }

  return (
    <>
      {/* notice */}
      {bioValue('notice') === '' ? null : (
        <div className="-mx-6 px-6 py-2 barberRollBg">
          <p className="font-bold uppercase">notice</p>
          <p className="font-medium ">{bioValue('notice')}</p>
        </div>
      )}

      {/* description */}
      {bioValue('description') == '' ? null : <p className="font-medium">{bioValue('description')}</p>}

      {/* url, email, contentHash */}
      {bioValue('url') == '' && bioValue('email') == '' && bioValue('contentHash') == '' ? null : (
        <ul role="list" className="profile-links">
          {/* url */}
          {bioValue('url') == '' ? null : (
            <li>
              <GlobeAltIcon className="icon" aria-hidden="true" />
              <Link href={formatUrl(bioValue('url'))}>
                <a target="_blank" className="group">
                  <span>{bioValue('url')}</span>
                  <ExternalLinkIcon className="inline-block -mt-0.5 w-3 h-3 text-violet-400 opacity-0 group-hover:opacity-100" />
                </a>
              </Link>
            </li>
          )}

          {/* email */}
          {bioValue('email') == '' ? null : (
            <li>
              <MailIcon className="icon" aria-hidden="true" />
              <a href={'mailto:' + bioValue('email')}>
                <span>{bioValue('email')}</span>
              </a>
            </li>
          )}

          {/* contentHash */}
          {bioValue('contentHash') == '' ? null : (
            <li>
              <HashtagIcon className="icon" aria-hidden="true" />
              <div>
                <span className="mr-2">{bioValue('contentHash')}</span>
                <span className="text-violet-400/25 group">
                  <button
                    className="hover:cursor-pointer text-sm group font-semibold tracking-wider hover:text-violet-400"
                    onClick={() => copyTextWithToast(bioValue('contentHash'))}
                  >
                    <DuplicateIcon className="-mt-0.5 w-4 h-4 inline-block" />
                  </button>
                  {props.ens.endsWith('.eth') ? (
                    <span className="pl-3">
                      <Link href={'https://' + props.ens + '.limo'}>
                        <a target="_blank" className=" hover:text-violet-400">
                          <span>{props.ens + '.limo'}</span>
                          <ExternalLinkIcon className="w-3 h-3 inline-block ml-0.5 -mt-0.5" />
                        </a>
                      </Link>
                    </span>
                  ) : null}
                </span>
              </div>
            </li>
          )}
        </ul>
      )}
    </>
  )
}
