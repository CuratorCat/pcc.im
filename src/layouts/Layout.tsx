import Head from 'next/head'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>pcc.im, show your web3 ENS profile (beta)</title>
        <meta name="description" content="pcc.im, show your web3 ENS profile (beta)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center">
        <div className="m-auto max-w-2xl flex flex-col min-h-[100vh] sm:mt-16 sm:mx-8 sm:min-h-[60vh] bg-[#473A74] sm:rounded-3xl text-white overflow-hidden">
          {children}
        </div>
      </div>
    </>
  )
}
