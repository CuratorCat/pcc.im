import Head from 'next/head'
import { Search } from 'components/Search'
import { Header } from 'components/Header'
import Link from 'next/link'
import { Footer } from 'components/Footer'
import { Layout } from 'layouts/Layout'

export default Home

function Home() {
  return (
    <>
      <Head>
        <title>pcc.im - Show your web3 ENS Profile (beta)</title>
        <meta name="description" content="pcc.im - Show your web3 ENS Profile (beta)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <main>
          <Search />

          <h4 className="text-xl uppercase text-white/50 font-bold tracking-wider">Explore</h4>
          <h5 className="mt-2">ENS Names</h5>
          <p>
            <a href="/vitalik.eth" className="example-links">
              vitalik.eth
            </a>
            <a href="/nick.eth" className="example-links">
              nick.eth
            </a>
            <a href="/taylor.wtf" className="example-links">
              taylor.wtf
            </a>
            <a href="/pcc.eth" className="example-links">
              pcc.eth
            </a>
            <a href="/curatorcat.eth" className="example-links">
              curatorcat.eth
            </a>
            <a href="/1.offchainexample.eth" className="example-links">
              1.offchainexample.eth
            </a>
            <a href="/curatorcat.pcc.eth" className="example-links">
              curatorcat.pcc.eth
            </a>
          </p>
          <h5 className="mt-2">.pcc.eth ENS using Cat Name</h5>
          <p>
            <a href="/curatorcat" className="example-links">
              curatorcat
            </a>
            <a href="/hodl" className="example-links">
              hodl
            </a>
            <a href="/carlini8" className="example-links">
              carlini8
            </a>
            <a href="/quit" className="example-links">
              quit
            </a>
            <a href="/TheShill" className="example-links">
              TheShill
            </a>
          </p>

          <h5 className="mt-2">Address</h5>
          <p>
            <a href="/0xcca7ccadbf0fbbf9ae20bcc67f849efa87343eee" className="example-links">
              0xcca7ccadbf0fbbf9ae20bcc67f849efa87343eee
            </a>
            <a href="/0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5 " className="example-links">
              0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5
            </a>
            <a href="/XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36" className="example-links">
              XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36
            </a>
          </p>
        </main>
        <Footer />
      </Layout>
    </>
  )
}
