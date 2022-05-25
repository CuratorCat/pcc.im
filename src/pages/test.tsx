import { Layout } from 'layouts/Layout'
import { DuplicateIcon, LinkIcon, MailIcon, HashtagIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Test() {
  return (
    <>
      <Layout>
        <h3 className="text-3xl pb-3">purrfile</h3>
        <div className="flex space-x-4 my-3">
          <div className="flex shrink-0">
            <img
              src="https://metadata.ens.domains/mainnet/avatar/arisac.eth"
              className="w-20 h-20 rounded-full overflow-hidden"
              alt=""
            />
          </div>
          <div className="flex-1 space-y-1.5">
            <h2 className="text-2xl font-semibold leading-tight break-all">curatorcat.pcc.eth</h2>
            <div>
              <p className="inline-block text-xs px-2 py-0.5 font-semibold tracking-wider uppercase rounded-full bg-violet-500">
                primary
              </p>
            </div>
            <div>
              <p className="text-sm text-violet-500 font-semibold tracking-wider">
                0xCCA1····3eeE{' '}
                <span>
                  <DuplicateIcon className="-mt-1 w-4 h-4 inline-block opacity-75" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1.5 leading-snug">
          <p className="font-medium">
            A friendly neighborhood CuratorCat, now curating https://pcc-archive.org for PCC community. #WeAreThePurrs &
            #WeLoveThePurrs
          </p>

          <ul role="list" className="pt-3 space-y-2 leading-tight">
            <li className="flex space-x-2 font-medium items-center">
              <LinkIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true" />
              <span className="break-all">
                <Link href="#">https://vitalik.ca</Link>
              </span>
            </li>
            <li className="flex space-x-2 font-medium items-center">
              <HashtagIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true" />
              <span className="break-all">
                <Link href="#">ipfs://QmQs98YJ6ynaeEQQ2t6j7H36hQyBNRVV1URptK8EjywKqi</Link>
              </span>
            </li>
            <li className="flex space-x-2 font-medium items-center">
              <MailIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true" />
              <span className="break-all">
                <Link href="#">arachnid@notdot.net</Link>
              </span>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  )
}
