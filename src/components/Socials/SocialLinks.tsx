import Link from "next/link"
import { TwitterLogo, InstagramLogo, TiktokLogo, GithubLogo } from "components/icons"
import { tryTwitterUserHandle, tryTwitterUserUrl, tryInstagramUserHandle, tryInstagramUserUrl, tryTiktokUserHandle, tryTiktokUserUrl, tryGithubUserHandle, tryGithubUserUrl } from "functions/SocialHelpers"

import {
  ExternalLinkIcon,
} from '@heroicons/react/outline'

export function SocialTwitter(props) {
  if (props == null) return null
  if (props.social == '') return null
  return (
    <Link href={tryTwitterUserUrl(props.social)}>
      <a className="text-blue-500" target="_blank">
        <TwitterLogo className="social-logo ml-1" />
        <span>{tryTwitterUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialInstagram(props) {
  if (props == null) return null
  if (props.social == '') return null
  return (
    <Link href={tryInstagramUserUrl(props.social)}>
      <a className="text-pink-500" target="_blank">
        <InstagramLogo className="social-logo" />
        <span>{tryInstagramUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialTiktok(props) {
  if (props == null) return null
  if (props.social == '') return null
  return (
    <Link href={tryTiktokUserUrl(props.social)}>
      <a className="text-black" target="_blank">
        <TiktokLogo className="social-logo" />
        <span>{tryTiktokUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialGithub(props) {
  if (props == null) return null
  if (props.social == '') return null
  return (
    <Link href={tryGithubUserUrl(props.social)}>
      <a className="text-black" target="_blank">
        <GithubLogo className="social-logo" />
        <span>{tryGithubUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}