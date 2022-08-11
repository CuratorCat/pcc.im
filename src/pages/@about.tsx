import { LayoutWider } from 'layouts'
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <LayoutWider>
        <Head>
          <title>about pcc.im</title>
        </Head>
        <article className="prose prose-invert leading-snug max-w-3xl">
          <h1>about pcc.im</h1>
          <h3>what is pcc.im</h3>
          <p>
            pcc.im is a service to showcase public ens profiles. it is built by{' '}
            <Link href="/curatorcat.pcc.eth">curatorcat.pcc.eth</Link> for fun, and it is not affiliated with
            purrnelope's country club project.
          </p>
          <p>it is currently in alpha and may not work well, some features may broke.</p>
          <h3>supported features</h3>
          <h4>ens names</h4>
          <ul>
            <li>eth ens and dns ens names on ethereum blockchain</li>
            <li>ens subdomains</li>
            <li>
              emoji<sup>(*)</sup> and special characters<sup>(*)</sup>
            </li>
            <li>public ens resolver, custom ens resolver, off-chain records</li>
          </ul>
          <h4>profile and social networks records</h4>
          <ul>
            <li>
              avatar, description, notice<sup>(x)</sup>, url, email, contentHash<sup>(*)</sup>
            </li>
            <li>twitter, instagram, tiktok, telegram, discord, github, linkedin</li>
          </ul>
          <h4>blockchain addresses</h4>
          <ul>
            <li>ethereum, bitcoin</li>
          </ul>
          <p>
            <em>(*): features may not work properly in some cases</em>
          </p>
          <p>
            <em>(x): features are temporarily disabled</em>
          </p>

          <h3>future plan and open-source</h3>
          <h4>operation</h4>
          <p>no plan yet, but should be able to operate as it is now for quite a long time</p>
          <h4>features</h4>
          <p>maybe another app to manage ens profile with custom resolvers, start with .pcc.eth's ensmapper?</p>
          <p>
            maybe new features heavily related to purrnelope's country club project. it's my favorite nft project, check
            their website at{' '}
            <Link href="https://purrnelopescountryclub.com">
              <a target="_blank">purrnelopescountryclub.com</a>
            </Link>
            . i also created an archive website for the project{' '}
            <Link href="https://pcc-archive.org">
              <a target="_blank">pcc-archive.org</a>
            </Link>
          </p>
          <h4>open-source</h4>
          <p>
            the source-code is on github:{' '}
            <Link href="https://github.com/CuratorCat/pcc.im">
              <a target="_blank">https://github.com/curatorcat/pcc.im</a>
            </Link>
            . i started this project as experiment, and the code is terrible and buggy. i plan to refactor but don't
            really have the time for now.
          </p>
          <p>
            this project mainly uses the following open-source projects:
            <span>
              {' '}
              <Link href="https://github.com/ethers-io/ethers.js">
                <a target="_blank">ethers.js</a>
              </Link>
              ,{' '}
              <Link href="https://github.com/vercel/next.js">
                <a target="_blank">next.js</a>
              </Link>
              ,{' '}
              <Link href="https://github.com/tailwindlabs/tailwindcss">
                <a target="_blank">tailwindcss</a>
              </Link>
            </span>
          </p>
        </article>
      </LayoutWider>
    </>
  )
}
