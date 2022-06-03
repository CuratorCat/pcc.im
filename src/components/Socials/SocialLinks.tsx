import Link from 'next/link'
import { TwitterLogo, InstagramLogo, TiktokLogo, GithubLogo, DiscordLogo, LinkedinLogo } from 'components/icons'
import {
  tryTwitterUserHandle,
  tryTwitterUserUrl,
  tryInstagramUserHandle,
  tryInstagramUserUrl,
  tryTiktokUserHandle,
  tryTiktokUserUrl,
  tryGithubUserHandle,
  tryGithubUserUrl,
  formatUrl,
  isHttpProtocol,
  tryTelegramUserUrl,
  tryTelegramUserHandle,
  tryLinkedinHandle,
  tryLinkedinUserUrl,
} from 'functions/SocialHelpers'
import { copyTextWithToast } from 'functions/CopyHelpers'
import { ExternalLinkIcon, DuplicateIcon } from '@heroicons/react/outline'
import { TelegramLogo } from 'components/icons'

export function SocialTwitter(props) {
  return props == null || props.social == '' || props.social == null ? null : (
    <Link href={tryTwitterUserUrl(props.social)}>
      <a className="text-blue-500" target="_blank">
        <TwitterLogo className="social-logo" />
        <span>{tryTwitterUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialInstagram(props) {
  return props == null || props.social == '' || props.social == null ? null : (
    <Link href={tryInstagramUserUrl(props.social)}>
      <a className="text-pink-500" target="_blank">
        <InstagramLogo className="social-logo" />
        <span>{tryInstagramUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialDiscord(props) {
  if (props == null || props.social == '' || props.social == null) return null
  if (isHttpProtocol(props.social))
    return (
      <Link href={formatUrl(props.social)}>
        <a className="text-indigo-600" target="_blank">
          <DiscordLogo className="social-logo" />
          <span>{props.social}</span>
          <ExternalLinkIcon className="indicator" />
        </a>
      </Link>
    )
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        copyTextWithToast(props.social)
      }}
      className="text-indigo-600"
    >
      <DiscordLogo className="social-logo" />
      <span>{props.social}</span>
      <DuplicateIcon className="indicator" />
    </a>
  )
}

export function SocialTiktok(props) {
  return props == null || props.social == '' || props.social == null ? null : (
    <Link href={tryTiktokUserUrl(props.social)}>
      <a className="text-black" target="_blank">
        <TiktokLogo className="social-logo" />
        <span>{tryTiktokUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialTelegram(props) {
  return props == null || props.social == '' || props.social == null ? null : (
    <Link href={tryTelegramUserUrl(props.social)}>
      <a className="text-sky-500" target="_blank">
        <TelegramLogo className="social-logo" />
        <span>{tryTelegramUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialGithub(props) {
  return props == null || props.social == '' || props.social == null ? null : (
    <Link href={tryGithubUserUrl(props.social)}>
      <a className="text-black" target="_blank">
        <GithubLogo className="social-logo" />
        <span>{tryGithubUserHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}

export function SocialLinkedin(props) {
  return props == null || props.social == '' || props.social == null ? null : (
    <Link href={tryLinkedinUserUrl(props.social)}>
      <a className="text-sky-700" target="_blank">
        <LinkedinLogo className="social-logo" />
        <span>{tryLinkedinHandle(props.social)}</span>
        <ExternalLinkIcon className="indicator" />
      </a>
    </Link>
  )
}
