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
      <Layout>
        <Header />
        <main>
          <Search />
          <h4 className="text-xl uppercase text-white/50 font-bold tracking-wider">Explore</h4>
          <h5 className="mt-2 font-semibold">ENS Names</h5>
          <p>
            <Link href="/vitalik.eth">
              <a className="example-links">vitalik.eth</a>
            </Link>
            <Link href="/nick.eth">
              <a className="example-links">nick.eth</a>
            </Link>
            <Link href="/taylor.wtf">
              <a className="example-links">taylor.wtf</a>
            </Link>
            <Link href="/pcc.eth">
              <a className="example-links">pcc.eth</a>
            </Link>
            <Link href="/curatorcat.eth">
              <a className="example-links">curatorcat.eth</a>
            </Link>
            <Link href="/1.offchainexample.eth">
              <a className="example-links">1.offchainexample.eth</a>
            </Link>
            <Link href="/curatorcat.pcc.eth">
              <a className="example-links">curatorcat.pcc.eth</a>
            </Link>
          </p>
          <h5 className="mt-2 font-semibold">.pcc.eth ENS using Cat Name</h5>
          <p>
            <Link href="/curatorcat">
              <a className="example-links">curatorcat</a>
            </Link>
            <Link href="/hodl">
              <a className="example-links">hodl</a>
            </Link>
            <Link href="/carlini8">
              <a className="example-links">carlini8</a>
            </Link>
            <Link href="/quit">
              <a className="example-links">quit</a>
            </Link>
            <Link href="/TheShill">
              <a className="example-links">TheShill</a>
            </Link>
          </p>

          <h5 className="mt-2 font-semibold">Address</h5>
          <p>
            <Link href="/0xcca7ccadbf0fbbf9ae20bcc67f849efa87343eee">
              <a className="example-links">0xcca7ccadbf0fbbf9ae20bcc67f849efa87343eee</a>
            </Link>
            <Link href="/0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5 ">
              <a className="example-links">0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5</a>
            </Link>
            <Link href="/XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36">
              <a className="example-links">XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36</a>
            </Link>
          </p>
        </main>
        <Footer />
      </Layout>
    </>
  )
}
