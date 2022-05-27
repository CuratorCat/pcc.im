import Head from 'next/head'
import { Footer } from 'components/Footer'
import { Header, HeaderBrand } from 'components/Header'

export function LayoutHome({ children }) {
  return (
    <>
      <GlobalHead />
      <div className="flex flex-col min-h-screen m-auto sm:max-w-lg sm:min-h-fit overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col rounded-3xl sm:rounded-[36px] min-h-[30vh] p-6 bg-violet-100/10">
          <HeaderBrand />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export function Layout({ children }) {
  return (
    <>
      <GlobalHead />
      <div className="flex flex-col min-h-screen m-auto sm:max-w-lg sm:min-h-fit overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col rounded-3xl sm:rounded-[36px] min-h-[30vh] p-6 bg-violet-100/10">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export function GlobalHead() {
  return (
    <Head>
      <title>pcc.im, show your web3 ENS profile (alpha)</title>
      <meta name="description" content="pcc.im, show your web3 ENS profile (alpha)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
