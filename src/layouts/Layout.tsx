import Head from 'next/head'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

export function LayoutHome({ children }) {
  return (
    <>
      <GlobalHead />
      <div className="flex flex-col min-h-screen bg-violet-100/10 m-auto sm:max-w-lg sm:my-16 sm:min-h-fit sm:rounded-3xl overflow-hidden">
        <header className="flex items-center p-6 pb-0">
          <Header />
        </header>
        <main className="flex flex-1 flex-col min-h-[30vh] p-6">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export function Layout({ children }) {
  return (
    <>
      <GlobalHead />
      <div className="flex flex-col min-h-screen bg-violet-100/10 m-auto sm:max-w-lg sm:my-16 sm:min-h-fit sm:rounded-3xl overflow-hidden">
        <main className="flex flex-1 flex-col min-h-[30vh] p-6">{children}</main>
        <Footer />
      </div>
    </>
  )
}

function GlobalHead() {
  return (
    <Head>
      <title>pcc.im, show your web3 ENS profile (alpha)</title>
      <meta name="description" content="pcc.im, show your web3 ENS profile (alpha)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
