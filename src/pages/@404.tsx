import { Search } from 'components/Search'
import { Layout } from 'layouts/Layout'
import { ExpoloreEns } from 'components/ExploreEns'
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Layout>
        <Head>
          <title>Error 404 (Not Found) pcc.im</title>
        </Head>
        <h1 className="text-2xl font-bold pb-3">Error 404 (Not Found)</h1>
        <p className="font-medium">The requested URL was not found on this server. That’s all we know.</p>
        <div className="py-4">
          <p>
            go back to{' '}
            <Link href="/">
              <a className="underline">pcc.im home</a>
            </Link>{' '}
          </p>
          <p>
            or look up an ens profile <span className="inline-block animate-bounce">👇</span>
          </p>
        </div>
        <Search />
        <ExpoloreEns />
      </Layout>
    </>
  )
}
